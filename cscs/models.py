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
        self.description:str = row['description']
        self.cs_page:str = row["cs_page"]
        self.stat:str = row['stat']
        self.tier:str = row['tier']

class CSFocus(CSItem):
    """wrapper for a Focus"""
    def __init__(self,row):
        super().__init__(row)
        self.name_en = row['name_en']
        self.description:str = row['description']
        self.cs_page:str = row["cs_page"]  

    @property
    def label(self):
        return self.name_en