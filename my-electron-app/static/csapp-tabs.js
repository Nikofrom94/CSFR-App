  /** Library for TabControl */
  /** reference : https://www.w3schools.com/howto/howto_js_tabs.asp */
  /** https://www.w3schools.com/bootstrap5/bootstrap_navs.php */


function createTabControl(name, parent){
    const tabListElement = document.createElement("ul");
    tabListElement.className = "nav nav-tabs";
    tabListElement.id = name;
    tabListElement.setAttribute("role","tablist");
    parent.append(tabListElement);
    const tabContentElement = document.createElement("div");
    tabContentElement.className = "tab-content";
    tabContentElement.id = name + "_tabcontent";
    parent.append(tabContentElement);
}

function addTab(tabcontrol_name, newtab_name,content){
    let new_tab = document.getElementById(newtab_name);
    if(new_tab==null){
        const tabListElement = document.getElementById(tabcontrol_name);
        const tabContentElement = document.getElementById(tabcontrol_name+"_tabcontent");
        const tabId = tabcontrol_name+"_tab_" + newtab_name;
        // add tabbutton
        const tabButton = document.createElement("li");
        tabButton.id = "btn_"+tabId;
        tabButton.class="nav-item";
        const divNavLink = document.createElement("div");
        divNavLink.className = "nav-link";
        divNavLink.id = "lnk_"+tabId;
        divNavLink.setAttribute("data-bs-toggle","tab");
        divNavLink.setAttribute("data-bs-target","#"+tabId);
        divNavLink.setAttribute("role","button");
        divNavLink.textContent = newtab_name;
        const closeButton = document.createElement("button");
        closeButton.type = "button";
        closeButton.className = "btn-close";
        closeButton.ariaLabel = "Close Button";
        closeButton.addEventListener('click', RemoveTab); 
        divNavLink.appendChild(closeButton);
        tabButton.appendChild(divNavLink);
        
        tabListElement.append(tabButton);

        const newTabDiv = document.createElement("div");
        newTabDiv.id = tabId;
        newTabDiv.className = "tab-pane container";
        newTabDiv.append(content);
        tabContentElement.append(newTabDiv);
    }
    return new_tab;
}

function createTabDiv(tabId,content){
    const tabDiv = document.createElement("div");
    tabDiv.id = tabId;
    tabDiv.className = "tab-pane container";
    tabDiv.append(content);
    return tabDiv;

}
function RemoveTab() {
    //removes the tab and the tab-pane
    let tabIdent = this.closest('.nav-link').dataset.bsTarget;
    //let tabPaneElement = document.querySelector(tabIdent);
    let tabPaneElement = document.getElementById(tabIdent.slice(1));
    let liElement = this.closest('li');
    tabPaneElement.remove();
    liElement.remove();
}
class TabControl{
    static(name,parent){
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
        const tabButton = document.createElement("li");_tabcontent
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



