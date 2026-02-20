from models import CSAbility
from PySide6.QtWidgets import QWidget,QGridLayout, QLineEdit, QFormLayout, QTextEdit,QLabel

class CSAbilityTab(QWidget):
    def __init__(self, ability:CSAbility):
        super().__init__()
        self._ability = ability
        gridlayout = QGridLayout()
        self.name = QLineEdit(self._ability.name)
        self.description = QTextEdit(self._ability.description)
        self.stat = QLineEdit(self._ability.stat)
        self.cs_page = QLineEdit(self._ability.cs_page)

        form = QFormLayout()
        form.addRow(self.tr("&Name"), self.name)
        form.addRow(self.tr("&Stat"), self.stat)
        form.addRow(self.tr("&cs_page"), self.cs_page)
        gridlayout.addLayout(form,0,0)
        gridlayout.addWidget(QLabel(self.tr("D&escription")),1,0)
        gridlayout.addWidget(self.description,2,0)
        self.setLayout(gridlayout)
