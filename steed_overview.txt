# 🌐 STEED MASTER ENGINE ARCHITECTURE PROFILE (CORE OVERVIEW)

## 🖥️ DEV ENVIRONMENT & GUARDRAILS
* **OS / Spec:** Windows 10 Home | i5 CPU | 8GB RAM | 256GB SSD | 13.3" Screen (3-Screen Extended Desktop).
* **Stack / UI:** Python 3.13.4 | Native `curses` Text User Interface (TUI Only). No modern wrappers.
* **Paradigm Style:** Pure procedural/functional design. Strictly NO `class` structures allowed.
* **Banned Overhead:** External dependencies (Pandas, NumPy, Textual, Flask, Node) are completely BANNED.
* **Orthogonality:** Core codebase remains 100% static. External metadata drives all app behavior.

## 📐 THE WAREHOUSE GRID HIERARCHY
An agnostic data-mapping matrix that fits up to 99 fields onto small screens with zero clipping or layout overlap:
* **Property:** Application Layer. The global root eco-system wrapper path.
* **House:** Database Layer. The physical storage container (Decoupled SQLite instance).
* **Room:** Viewport Layer. The specific dataset metadata definition file layout loaded at runtime.
* **Cabinet:** Block. High-level categorical layout sections or physical screen frame boxes.
* **Shelf:** Sub-block. Nested data sub-sections within an active visual block.
* **Bin:** Visual Group. Container row layout. Programmatically injects a blank screen line on change.
* **Field:** Data Element. Agnostic storage cells (`F01–F99`). Vertically stacked coordinates `[Label]: [Field]`.

## 🏛️ DATA LAYOUT TABLES SCHEMA

### Table 1: `viewports` (The Metadata Schema Lenses)
* **Purpose:** Stores compiled, validated structural blueprints parsed from user viewport files.
* **Keys / Scope:** Scoped strictly using the required tracking column `source_viewport_name` to handle infinite configurations.
* **Columns Required (21 Fixed):** `field_code`, `parent_field_code`, `field_label`, `block_code`, `sub_block_code`, `group_code`, `sort_order`, `searchable_flag`, `search_results_flag`, `search_results_field_width`, `search_results_order`, `search_list_order`, `data_type`, `default_value`, `display_mask`, `force_case`, `max_length`, `field_length`, `read_only_flag`, `visible_flag`, `lookup_name`.

### Table 2: `content` (The Domain Content Blocks)
* **Purpose:** Agnostic flat text storage container rows for raw user data records.
* **Structure:** Composed of `source_content_name`, `source_viewport_name`, and columns `F00` through `F99`.
* **Identity / Isolation:** All fields are defined as `TEXT NOT NULL DEFAULT ''`. Cell `F00` serves as the CUID (Content Unique Identifier). Row uniqueness is a compound database key index: `F00` + `source_viewport_name`.

## 🛡️ THREE-TIER PIPELINE GATEKEEPER SPECIFICATION
Data transformations flow down a strict, rigid inheritance chain: **Source File --> `rules.json` --> `.py` Engine Code**.

### Phase 1: Fail-Fast Header Validator
* Direct ordinal identity check comparing raw text fields against the `REQUIRED_VIEWPORT_COLUMNS` constant.
* A name misspelling or structural mismatch triggers an immediate short-circuit block: it skips all row checking, populates an explicit `[MISSING]` column checklist, halts DB transactions, and outputs `FINAL RESULT: CRITICAL_STRUCTURAL_FAILURE`.

### Phase 2: Vertical Matrix Scanner (`validate_file_rows`)
Executes non-negotiable structural validation loops across the entire input file using the **`VIEWPORT_FIELDS`** constant array (`F01` to `F99` strings) before running any row rules engine functions:
* **Range Bounds:** Instantly rejects out-of-range field codes (e.g., `F130`, `F100` to `F167`) and cancels processing for that row.
* **Duplication Filter:** Tracks entries on a temporary memory clipboard set to block duplicate field profile mappings.
* **Sequence Gap Scan:** Scans keys from the lowest to highest parsed index. If an intermediate sequence number is skipped (e.g., jumping from `F11` to `F13` without `F12`), it appends an explicit broken layout chain error to the report log.

### Phase 3: Horizontal Row Logic (`run_rules_for_row`)
* **Conditional Visibility:** Active ONLY if `field_label` has length > 0. If active, `block_code` and `sub_block_code` are immediately elevated to strict required fields. If empty or non-integer, they log as fatal errors.
* **Default Mutations:** 12 layout modifier columns automatically inject fallback values if left blank, mutating the live data bus in-place and logging them based on `rules.json` severity thresholds (`warning`, `information`, `error`).

## ⚙️ CORE FILE FOOTPRINT OPERATIONS
* `scripts/inspection_00.py`: The orchestrator wrapper. Controls arguments (`-dbs`, `-vpt`, `-ini`) and handles short-circuits.
* `code/func_import_pipeline.py` [32.9 KB]: Positional header parser sniffer. Decoupled from hardcoded listings.
* `code/func_reporting.py` [7.7 KB]: Consolidated error engine writer. Standardizes report layout logs into `LOG_DIR` unconditionally.
* `code/backend_sqlite.py` [5.3 KB]: Strict parameterized statements. Appends `WHERE source_viewport_name = ?` to every query to guarantee profile isolation. Ingestion loops execute inside a `BEGIN TRANSACTION` block; single row failures fire an immediate `ROLLBACK`.

## 🎯 NEXT IMPLEMENTATION STAGE: USER CONTENT INGESTION
Apply matching validation checks and balances to process user records into the `content` table. Data strings arrive via `.csv`, `.txt`, or `.xlsx`, but layouts feature literal database column headers (`F01` to `F99`) containing unknown rows and domain-agnostic subject matter.

### Prioritized Action Checklist (Backend Mechanics Only):
1. **Validation-to-Ingestion Wiring:** Route clean zipped dictionaries from the parsing pipeline straight into atomic transaction loops inside `backend_sqlite.py`. Wrap the pass in a transaction block to trigger a `ROLLBACK` on an `[ERROR]` match.
2. **Audit Ledger Serialization (`func_util_ledger.py`):** Secure the append-only transaction ledger logs within `LEDGER_DIR`. Enforce a low-level character substitution filter to swap literal pipe signs (`|`) with a safe sequence (`--`) within string values to keep ledger counts fixed and prevent parsing drift during data rollbacks.
3. **Dynamic INI Capacity Scanner:** Replace hardcoded row limitation checks with a configuration scanner that reads limit constraints straight from the active profile inside `INI_DIR`, falling back to the hardwired threshold of **99 rows** if missing.
