import sys,sqlite3
from PySide6.QtGui import QIcon
from PySide6.QtWidgets import QApplication, QMainWindow, QPushButton, QWidget, QGridLayout, QLCDNumber, QSizePolicy, QLayoutItem, QLabel
from PySide6.QtWidgets import QTreeWidget,QTreeWidgetItem
from PySide6.QtWidgets import QTabWidget,QFormLayout,QLineEdit

CSCSG_DBPATH = '/home/niko/Documents/jdr/CypherSystem/Cypher-SRD-FR/CSCG/cscgsite/db.sqlite3'

class CSItem:
    def __init__(self,row):
        self.id:str = row['id']
        self.name:str = row['name']

    @property
    def label(self) -> str:
        return self.name

class CSAbility(CSItem):
    """Wrapper for an Ability"""
    def __init__(self,row):
        super().__init__(row)
        self.name_en:str = row['name_en']
        self.description:str = row['description']
        self.cs_page:str = row["cs_page"]
        self.stat:str = row['stat']
        self.tier:str = row['tier']

    @property
    def label(self):
        return self.name_en

class CSFocus(CSItem):
    """wrapper for a Focus"""
    def __init__(self,row):
        super().__init__(row)
        self.name_en = row['name_en']


class GridCSAbility(QGridLayout):
    def __init__(self, ability:CSAbility):
        super().__init__()
        self._ability = ability
        self.name = QLineEdit(self._ability.name)
        self.description = QTextEdit(self._ability.description)
        self.stat = QLineEdit(self._ability.stat)
        self.cs_page = QLineEdit(self._ability.cs_page)
        self.form = QFormLayout()
        self.form.addRow(self.tr("&Name"), self.name)
        self.form.addRow(self.tr("&Stat"), self.stat)
        self.form.addRow(self.tr("&cs_page"), self.cs_page)
        self.addWidget(self.form,0,0)
        self.addWidget(QLabel(self.tr("&Description")),1,0)
        self.addWidget(self.description,2,0)


class CSCGDB():
    def __init__(self, db_path):
        self.con = sqlite3.connect(db_path)
        self.con.row_factory = sqlite3.Row

    def get_csitems(self, table_name, wrapper):
        query = f"SELECT * FROM {table_name} ORDER BY name_en"
        cursor = self.con.execute(query)
        items = []
        for row in cursor:
            items.append(wrapper(row))
        return items

    def get_abilities(self):
        """get all abilities (id, name, name_en)"""
        return self.get_csitems('cscg_ability', CSAbility)
    
    def get_foci(self):
        return self.get_csitems('cscg_focus', CSFocus)

    def get_types(self):
        return self.get_csitems('cscg_focus', CSItem)


class CSBrowserItem(QTreeWidgetItem):
    """Wrapper for browsing Abilities, Foci, Types & al
        add a signal to show the item in a tab"""
    def __init__(self, item, target=None):
        super().__init__(None, [item.label])
        if target is not None:
            pass


class CSBrowser(QTreeWidget):
    def __init__(self):
        super().__init__()
        csdb = CSCGDB(CSCSG_DBPATH)
        self.setColumnCount(1)
        self.insertTopLevelItems(0, [QTreeWidgetItem(None,[self.tr("Abilities")])])
        self.insertTopLevelItems(1, [QTreeWidgetItem(None,[self.tr("Types")])])
        self.insertTopLevelItems(2, [QTreeWidgetItem(None,[self.tr("Foci")])])
        root_ab = self.topLevelItem(0)
        for item in csdb.get_abilities():
            node = CSBrowserItem(item)
            root_ab.addChild(node)
        root_types = self.topLevelItem(1)
        for item in csdb.get_types():
            node = CSBrowserItem(item)
            root_types.addChild(node)
        root_foci = self.topLevelItem(2)
        for item in csdb.get_foci():
            node = CSBrowserItem(item)
            root_foci.addChild(node)

class CSTab(QTabWidget):
    def __init__(self):
        super().__init__()
        self.setTabsClosable(True)

    def show_tab(self,label:str, content:QWidget) -> None:
        # check for a tab with same name to show it
        for index in range(self.count()):
            if self.tabText(index) == label:
                self.setTabEnabled(index,True)
                return
        # no tab with that name/label : add it
        self.addTab(content, label)

class MyWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Cypher System Character Sheet V0.1")
        self.setWindowIcon(QIcon("icons/yes.png"))
        self.resize(500, 500)
        self.setStyleSheet("background: #333333; border: 10px solid #333333;")

        central_widget = QWidget()
        self.setCentralWidget(central_widget)

        main_grid = QGridLayout()             # l, c, h, w

        browse_grid = QGridLayout()
        browse_tree = CSBrowser()
        browse_grid.addWidget(browse_tree,0,0)

        tab_grid = CSTab()

        main_grid.addWidget(browse_tree, 0, 0)

        main_grid.addWidget(tab_grid, 0,1)

        #
        # for idx in range(grid.count()):
        #     item: QLayoutItem = grid.itemAt(idx)
        #     widget = item.widget()
        #     widget.setSizePolicy(QSizePolicy.Expanding, QSizePolicy.Expanding)
        #     if isinstance(widget, QPushButton):
        #         widget.setStyleSheet("background: #595959; color: white; font-weight: bold; font-size: 20px")
        #     else:
        #         widget.setStyleSheet("background: #a2af77; font-weight: bold")
        #
        # equal_button.setStyleSheet("background: #f05a2D; font-weight: bold; font-size: 20px; color: white;")

        central_widget.setLayout(main_grid)


if __name__ == "__main__":
    app = QApplication(sys.argv)

    myWindow = MyWindow()
    myWindow.show()

    sys.exit(app.exec())
