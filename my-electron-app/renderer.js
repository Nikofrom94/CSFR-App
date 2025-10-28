let ab_list = null;


const LoadData = async () => {
  //const json_data = await window.json_data.getData();
  //const focus_list =json_data.focus_list;
  //const ab_list = json_data.ab_list;
  ab_list = await window.AbilityViewer.getAbilities();
 // LoadFocus(focus_list);
  LoadAbilities(ab_list);
  HideAll();
}

LoadData();

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
  HideAll();
  $("#ab_list").show();
}

function ShowFocus(){
  HideAll();
  $("#focus_list").show();
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
    $("#ab_table_body").append("<tr id=\"ab_item_tr_"+element.id+"\">"+f_id+f_name+f_name_en+f_cs_page+"</tr>")
  }
}

function ab_list_search(){
  const input = document.getElementById("ab_list_search");
  filter = input.value.toUpperCase();
  // Loop through all ab_list items, and hide the row of those who don't match the search query
  for (i = 0; i < ab_list.length; i++) {
    const current_name = ab_list[i].name;
    if (current_name.toUpperCase().indexOf(filter) > -1) {
      $("#ab_item_tr_"+ab_list[i].id).show();
    } else {
      $("#ab_item_tr_"+ab_list[i].id).hide();
    }
  }
}

function DisplayAbility(id){
  const ab = LoadAbilityFromId(id);
  if(ab != null){
    HideAll();
    
  }
}