import sqlite3

from models import CSAbility, CSFocus, CSItem

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

    def get_abilities(self, lang_id):
        """get all abilities (id, name, name_en)"""
        query = f"SELECT csqt_ability.id,csqt_abilitylang.name as name,description,stat,cs_page,tier FROM csqt_ability inner join csqt_abilitylang on csqt_ability.id=csqt_abilitylang.ability_id where csqt_abilitylang.lang_id={lang_id} ORDER BY csqt_abilitylang.name"
        cursor = self.con.execute(query)
        items = []
        for row in cursor:
            items.append(CSAbility(row))
        return items
    
    def get_foci(self):
        return self.get_csitems('csqt_focus', CSFocus)

    def get_types(self):
        return self.get_csitems('cscg_focus', CSItem)

