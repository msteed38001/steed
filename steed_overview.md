import curses

#=== const_colors.py #===  
# =========================================================
# UI CONSTANTS
# =========================================================
CP_DEFAULT           = 1
CP_FRAME             = 2
CP_DIVIDER           = 3
CP_LABEL             = 4
CP_FIELD             = 5
CP_LOGO              = 6
CP_LOGO_TEXT         = 7
CP_HEADER            = 8
CP_WARNING           = 9
        
CP_INPUT             = CP_DEFAULT
CP_FOCUS             = CP_FIELD

def init_theme():
    curses.start_color()
    curses.use_default_colors()

    curses.init_pair(CP_DEFAULT, curses.COLOR_WHITE, curses.COLOR_BLACK)
    curses.init_pair(CP_FRAME, curses.COLOR_BLACK, curses.COLOR_BLACK)
    curses.init_pair(CP_DIVIDER, curses.COLOR_YELLOW, curses.COLOR_BLACK)
    curses.init_pair(CP_LABEL, curses.COLOR_CYAN, curses.COLOR_BLACK)
    curses.init_pair(CP_FIELD, curses.COLOR_GREEN, curses.COLOR_BLACK)
    curses.init_pair(CP_LOGO, curses.COLOR_GREEN, curses.COLOR_BLACK)
    curses.init_pair(CP_LOGO_TEXT, curses.COLOR_WHITE, curses.COLOR_BLACK)
    curses.init_pair(CP_HEADER, curses.COLOR_WHITE, curses.COLOR_BLACK)
    curses.init_pair(CP_WARNING, curses.COLOR_RED, curses.COLOR_BLACK) 


#=== const_footer.py #===  
FOOTER_ROW1 = "[ESC]:Exit"
FOOTER_ROW2 = "[MSG]:Press any key to continue"
FOOTER_COLOR = 2 


#=== const_header.py #===  
DATA_ENTRY_HEADER_TEXT = "CUID"
HEADER_COLOR = 1 


#=== const_keylabels.py #===  
LABEL_F2      = "[F2]:New"
LABEL_F3      = "[F3]:View"
LABEL_F4      = "[F4]:Edit"
LABEL_F5      = "[F5]:Refresh"
LABEL_F6      = "[F6]:Clone"
LABEL_F7      = "[F7]:Search"
LABEL_F8      = "[F8]:Delete"
LABEL_F9      = "[F9]:Debug"
LABEL_F10     = "[F10]:Save to Draft"
LABEL_F12     = "[F12]:Save to DB"
LABEL_TAB     = "[TAB]:Up/Dn"
LABEL_ENTER   = "[ENT]:Go"
LABEL_MSG     = "[MSG]:"
LABEL_EXIT    = "[ESC]:Exit"

KEY_CTRL_D    = "[CTRL]+D:Delete"
KEY_CTRL_N    = "[CTRL]+N:New"
KEY_CTRL_T    = "[CTRL]+T:View Stats"
KEY_CTRL_S    = "[CTRL]+S:Save Draft"
KEY_ENTER     = "[ENTER]:Search"
KEY_TAB       = "[TAB]↑↓ Move"


#=== const_keycodes.py #===  

# Basic keys (single definitions only)
K_TAB          = 9
K_ENTER        = 10
K_RETURN       = 13
K_SPACE        = 32
K_ESC          = 27
K_KP_ENTER     = 459
K_INSERT       = 277
K_DELETE       = 127
K_BACKSPACE    = 8
K_BACKSPACE_ALT = 127

# Arrow keys
K_UP           = curses.KEY_UP
K_DOWN         = curses.KEY_DOWN
K_RIGHT        = curses.KEY_RIGHT
K_LEFT         = curses.KEY_LEFT

# Navigation
K_HOME         = curses.KEY_HOME
K_END          = curses.KEY_END
K_PAGEUP       = curses.KEY_PPAGE
K_PAGEDOWN     = curses.KEY_NPAGE
K_CURSES_BACKSPACE = curses.KEY_BACKSPACE
K_BTAB         = curses.KEY_BTAB

# CTRL keys
K_CTRL_D       = 4
K_CTRL_I       = 9
K_CTRL_L       = 12
K_CTRL_N       = 14
K_CTRL_O       = 15
K_CTRL_S       = 19
K_CTRL_T       = 20
K_CTRL_W       = 23

# Letter keys
K_Q            = ord('q')
K_Q_UPPER      = ord('Q')

# Weird F4 variants
K_F4_ALT1      = 268
K_F4_ALT2      = 1004
K_F4_ALT3      = 52

# Function keys
K_F1  = 264 + 1
K_F2  = 264 + 2
K_F3  = 264 + 3
K_F4  = 264 + 4
K_F5  = 264 + 5
K_F6  = 264 + 6
K_F7  = 264 + 7
K_F8  = 264 + 8
K_F9  = 264 + 9
K_F10 = 264 + 10
K_F11 = 264 + 11
K_F12 = 264 + 12

# ENTER variants (kept exactly as you intended)
K_ALL_ENTER_BASE = (
    10, 13,
    343, 360,
    458, 459, 463,
    269,
    13+256, 13+512, 13+1024
)

K_ALL_ENTER = list(K_ALL_ENTER_BASE) + [
    curses.KEY_ENTER,
    getattr(curses, "KEY_COMMAND", -1),
]


#=== const_layout.py #===  
POPUP_Y            = 4
POPUP_X            = 4
POPUP_MAX_HEIGHT   = 20
POPUP_MIN_WIDTH    = 24
POPUP_MAX_WIDTH    = 80

GROUP_SPACER_MODE  = "blank"
FILL_CHAR          = " "

HEADER_HEIGHT        = 5
FOOTER_STATIC_ROWS   = 2
FOOTER_STATUS_ROWS   = 1
FOOTER_DIVIDER_ROWS  = 1
FOOTER_HEIGHT        = FOOTER_STATIC_ROWS + FOOTER_STATUS_ROWS + FOOTER_DIVIDER_ROWS

FORM_DIVIDER_Y      = 4
FORM_LABEL_Y_START  = FORM_DIVIDER_Y + 1
FORM_LABEL_X        = 2
FORM_FIELD_X        = 25


 
#=== const_menu.py #===  
# ---------------------------------------------------------
# MENU CONSTANTS (PURE PYTHON)
# ---------------------------------------------------------

# ----- Daily Use Files -----
DAILY_USE_FILES_LABEL      = "Daily Use Files"
DAILY_USE_FILES_CODE       = None

DB_SELECT_LABEL            = "Select Database"
DB_SELECT_CODE             = "DB"

VIEWPORT_SELECT_LABEL       = "Select Viewport"
VIEWPORT_SELECT_CODE        = "PRF"

INI_SELECT_LABEL           = "Select Initialization"
INI_SELECT_CODE            = "INI"

RUN_DATA_ENTRY_LABEL       = "Run Data Entry"
RUN_DATA_ENTRY_CODE        = "SEARCH"


# ----- Metadata -----
METADATA_LABEL             = "Metadata"
METADATA_CODE              = None

DB_SELECT_META_LABEL       = "Select Database"
DB_SELECT_META_CODE        = "DB"

XLSX_SELECT_LABEL          = "Select Metadata XLSX"
XLSX_SELECT_CODE           = "XLSX"

LOAD_METADATA_LABEL        = "Load Metadata Into DB"
LOAD_METADATA_CODE         = "XFR"

XLSX_SELECT_CONTENT_LABEL  = "Select Content XLSX"
XLSX_SELECT_CONTENT_CODE   = "XLSXCONTENT"

LOAD_CONTENT_LABEL        = "Load Content Into DB"
LOAD_CONTENT_CODE         = "CONTENT"


# ----- Create New -----
CREATE_NEW_LABEL           = "Create New"
CREATE_NEW_CODE            = None

NEW_DB_LABEL               = "New Database"
NEW_DB_CODE                = "NEW_DB"

NEW_VIEWPORT_LABEL          = "New Viewport"
NEW_VIEWPORT_CODE           = "NEW_VPT"


# ----- Utilities -----
UTILITIES_LABEL            = "Utilitites"
UTILITIES_CODE             = None

BACKUP_DB_LABEL            = "Backup All"
BACKUP_DB_CODE             = "BKP"

GENERATE_BOOT_LABEL        = "Generate Boot Script"
GENERATE_BOOT_CODE         = "BOOT"

GENERATE_SHORTCUT_LABEL    = "Make Shortcut"
GENERATE_SHORTCUT_CODE     = "SHORTCUT"
 
# ---------------------------------------------------------
# MENU ITEMS (BUILT FROM CONSTANTS ABOVE)
# ---------------------------------------------------------
MENU_ITEMS = [
    # ----- Daily Use Files -----
    {"label": DAILY_USE_FILES_LABEL, "code": DAILY_USE_FILES_CODE},
    {"label": DB_SELECT_LABEL,       "code": DB_SELECT_CODE},
    {"label": VIEWPORT_SELECT_LABEL,  "code": VIEWPORT_SELECT_CODE},
    {"label": INI_SELECT_LABEL,      "code": INI_SELECT_CODE},
    {"label": RUN_DATA_ENTRY_LABEL,  "code": RUN_DATA_ENTRY_CODE},

    # ----- Metadata -----
    {"label": METADATA_LABEL,        "code": METADATA_CODE},
    {"label": DB_SELECT_META_LABEL,  "code": DB_SELECT_META_CODE},
    {"label": XLSX_SELECT_LABEL,     "code": XLSX_SELECT_CODE},
    {"label": LOAD_METADATA_LABEL,   "code": LOAD_METADATA_CODE},
    {"label": XLSX_SELECT_CONTENT_LABEL,     "code": XLSX_SELECT_CONTENT_CODE},
    {"label": LOAD_CONTENT_LABEL,    "code": LOAD_CONTENT_CODE},

    # ----- Create New -----
    {"label": CREATE_NEW_LABEL,      "code": CREATE_NEW_CODE},
    {"label": NEW_DB_LABEL,          "code": NEW_DB_CODE},
    {"label": NEW_VIEWPORT_LABEL,     "code": NEW_VIEWPORT_CODE},

    # ----- Utilities -----
    {"label": UTILITIES_LABEL,       "code": UTILITIES_CODE},
    {"label": BACKUP_DB_LABEL,       "code": BACKUP_DB_CODE},
    {"label": GENERATE_BOOT_LABEL,   "code": GENERATE_BOOT_CODE},
]