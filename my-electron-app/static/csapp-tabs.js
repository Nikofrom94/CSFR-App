  /** Library for TabControl */
  /** reference : https://www.w3schools.com/howto/howto_js_tabs.asp */
  /** https://www.w3schools.com/bootstrap5/bootstrap_navs.php */




class TabControl{
    constructor(name,parent){
        this.name = name;
        this.parent = parent;
        this.tabs = new Map();
        this.buttons = new Map();
        this.currentTab = null;
        this.navPills = document.createElement("ul");
        this.navPills.className = "nav nav-tab";
        this.navPills.id = name;
        this.parent.append(this.navPills);
        this.divTabs = document.createElement("div");
        this.divTabs.className = "tab-content";
        this.divTabs.id = name + "_tabcontent";
        this.parent.append(this.divTabs);
        this.tabCreatedCount = 0;
    }
    addTab(name,content){    
        if(this.tabs.has(name) == false){
            this.tabCreatedCount++;
            const tabId = "tab_" + this.name + this.tabCreatedCount;
            this.buttons.set(tabId, this.__addTabButton(tabId,name));
            this.tabs.set(name,new Tab(name, tabId,content));
            this.divTabs.append(this.tabs.get(name).tabContent);
        }
        this.currentTab = this.tabs[name];
        return this.tabs[name];
    }
    __addTabButton(tabId, name){
        const tabButton = document.createElement("li");
        tabButton.id = "btn_"+tabId;
        tabButton.class="nav-item";
        const divNavLink = document.createElement("div");
        divNavLink.className = "nav-link";
        divNavLink.id = "lnk_"+tabId;
        divNavLink.setAttribute("data-bs-toggle","tab");
        divNavLink.setAttribute("data-bs-target","#"+tabId);
        divNavLink.setAttribute("role","button");
        divNavLink.textContent = name;
        const closeButton = document.createElement("button");
        closeButton.type = "button";
        closeButton.className = "btn-close";
        closeButton.ariaLabel = "Close Button";
        closeButton.addEventListener('click', TabControl.RemoveTab); 
        divNavLink.appendChild(closeButton);
        tabButton.appendChild(divNavLink);
        this.navPills.append(tabButton);
        return tabButton;
    }

    static RemoveTab() {
        //removes the tab and the tab-pane
        let tabIdent = this.closest('.nav-link').dataset.bsTarget;
        //let tabPaneElement = document.querySelector(tabIdent);
        let tabPaneElement = document.getElementById(tabIdent.slice(1));
        let liElement = this.closest('li');
        tabPaneElement.remove();
        liElement.remove();
    }
}

class Tab{
    constructor(name,tabId,content){
        this.name = name;
        this.id = tabId;
        this.tabContent = document.createElement("div");
        this.tabContent.id = tabId;
        this.tabContent.className = "tab-pane container";
        this.tabContent.append(content);
    }
    hide(){
        $("#"+this.tabId).hide();
    }
    show(){
        $("#"+this.tabId).show();
    }
}



