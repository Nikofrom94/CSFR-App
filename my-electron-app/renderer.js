let ab_list = null;

const LoadData = async () => {
  //const json_data = await window.json_data.getData();
  //const focus_list =json_data.focus_list;
  //const ab_list = json_data.ab_list;
  const ab_list = await window.AbilityViewer.getAbilities();
 // LoadFocus(focus_list);
  LoadAbilities(ab_list);
  HideAll();
}

const LoadAbilitiesAsync = async () => {
  ab_list = await window.AbilityViewer.getAbilities();
  LoadAbilities(ab_list);
}


//LoadData();

const LoadAbilityFromId = async (id) => {
  const ability = await window.AbilityViewer.getAbilityFromId(id);
  console.log(ability);
  return ability;
}

function HideAll(){
  $("#ab_list").hide();
  $("#focus_list").hide();
}

function ShowAbilities(){
  if(document.getElementById("ability_list_tab") == null){
    const divAbilityList = getDIVAbilities();
    const focus_tab = addTab("maintabcontrol","ability_list_tab", divAbilityList);
    LoadAbilitiesAsync();
  }
}

function ShowAbility(id){
  if(document.getElementById("ab_"+id+"_tab") == null){
    const divAbilityList = getDIVAbility();
    const focus_tab = addTab("maintabcontrol","ab_"+id+"_tab", divAbilityList);
    LoadAbilitiesAsync();
  }
}

function ShowFocus(){
  //HideAll();
  //$("#focus_list").show();
  const focus_tab = addTab("maintabcontrol","focus_list_tab", );
}

function LoadFocus(focus_list){
  for(let i=0;i<focus_list.length;i++){
    const element = focus_list[i];
    const f_id = "<td>"+element.id+"</td>";
    const f_name = "<td>"+element.name+"</td>";
    const f_name_en = "<td>"+element.name_en+"</td>";
    const f_description = "<td>"+element.description+"</td>";
    const f_cs_page = "<td>"+element.cs_page+"</td>";
    $("#focus_table_body").append("<tr>"+f_id+f_name+f_name_en+f_description+f_cs_page+"</tr>")
  }
}

function LoadAbilities(ab_list){
  for(let i=0;i<ab_list.length;i++){
    const element = ab_list[i];
    const f_id = "<td>"+element.id+"</td>";
    const f_name = "<td>"+element.name+"</td>";
    const f_name_en = "<td>"+element.name_en+"</td>";
    const f_cs_page = "<td>"+element.cs_page+"</td>";
    $("#ab_list_table_body").append("<tr id=\"ab_item_tr_"+element.id+"\">"+f_id+f_name+f_name_en+f_cs_page+"</tr>")
  }
}



/** get the ability from backend DB and diaply it into a new tab */
function DisplayAbility(id){
  const ab = LoadAbilityFromId(id);
  if(ab != null){
    HideAll();
    
  }
}

let maintabcontrol=null;
$(document).ready(function(){
    const maindisplay = document.getElementById("main-display");
    maintabcontrol = createTabControl("maintabcontrol",maindisplay);
});