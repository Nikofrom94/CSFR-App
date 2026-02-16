/*************************************************************** */
/** ABILITY */
/** used by the block displaying the ability list */
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

function newheader(title){
  const header = document.createElement("th");
  header.innerHTML = title;
  return header;
}

/** return the block displaying the list of abilities */
function getDIVAbilities(){
  let div_ab_list = document.getElementById("ab_list");
  if(div_ab_list == null){
    div_ab_list = document.createElement("div");
    div_ab_list.id = "ab_list";
    const ab_list_search = document.createElement("input");
    ab_list_search.id = "ab_list_search";
    ab_list_search.setAttribute("onkeyup", "ab_list_search()");
    ab_list_search.placeholder = "Search for names..";
    div_ab_list.append(ab_list_search);
    const ab_table = document.createElement("table");
    ab_table.className = "table table-striped";
    ab_table.id = "ab_list_table";
    const ab_table_head = document.createElement("thead");
    const head_tr = document.createElement("tr");
    head_tr.append(newheader("ID"));
    head_tr.append(newheader("Name"));
    head_tr.append(newheader("Name (en)"));
    head_tr.append(newheader("CS Page"));
    ab_table_head.append(head_tr);
    ab_table.append(ab_table_head);
    const ab_list_table_body = document.createElement("tbody");
    ab_list_table_body.id = "ab_list_table_body";
    ab_table.append(ab_list_table_body);
    div_ab_list.append(ab_table);
  }
  return div_ab_list;
}
/** showAbilityList */
function showAbilityList(){
  //const mainTabcontrol = document.getElementById("maintabcontrol");
  const ab_list_tab = mainTabcontrol.addTab("ab_list", getDIVAbilities());
  ab_list_tab.show();
}
/** showAbilityList */
function showAbility(id){
  //const mainTabcontrol = document.getElementById("maintabcontrol");
  const ab_tab = mainTabcontrol.addTab("ab_"+id, getDIVAbility(id));
  ab_tab.show();
}
function getDIVAbilityField(fieldname, fieldvalue){
  const div_ab_field = document.createElement("div")
  div_ab_field.className="row";
  const div_col_name = document.createElement("div");
  div_col_name.className = "col-sm-2";
  div_col_name.innerHTML = fieldname;
  div_ab_field.append(div_col_name);
  const div_col_value = document.createElement("div");
  div_col_value.className = "col-sm-4";
  div_col_value.innerHTML = fieldvalue;
  div_ab_field.append(div_col_value);
  return div_ab_field;
}
/** return the block displaying the list of abilities */
function getDIVAbility(id, ability){
  const div_ab = document.createElement("div");
  div_ab.id = "div_ab_"+id;
  div_ab.className = "container";
  div_ab.append(getDIVAbilityField("ID",ability.id));
  div_ab.append(getDIVAbilityField("Name",ability.name));
  div_ab.append(getDIVAbilityField("Name (en)",ability.name_en));
  div_ab.append(getDIVAbilityField("Stat",ability.stat));
  div_ab.append(getDIVAbilityField("Rang",ability.tier));
  div_ab.append(getDIVAbilityField("Description",ability.description));
  return div_ab;
}
/*************************************************************** */
/** FOCUS */
/** focus_list_search: used by the block displaying the focus list */
function focus_list_search(){
  const input = document.getElementById("ab_list_search");
  filter = input.value.toUpperCase();
  // Loop through all focus_list items, and hide the row of those who don't match the search query
  for (i = 0; i < focus_list.length; i++) {
    const current_name = ab_list[i].name;
    if (current_name.toUpperCase().indexOf(filter) > -1) {
      $("#focus_item_tr_"+ab_list[i].id).show();
    } else {
      $("#focus_item_tr_"+ab_list[i].id).hide();
    }
  }
}
/** return the block displaying the list of focus */
function getDIVFocus(){
  let div_focus_list = document.getElementById("focus_list");
  if(div_focus_list == null){
    const div_focus_list = document.createElement("div");
    div_focus_list.id = "focus_list";
    const focus_list_search = document.createElement("input");
    focus_list_search.id = "focus_list_search";
    focus_list_search.onkeyup = "focus_list_search()";
    focus_list_search.placeholder = "Search for names..";
    div_focus_list.append(focus_list_search);
    div_focus_list.append("<table class=\"table table-striped\" id=\"focus_list_table\"><thead><tr><th>ID</th><th>Name</th><th>Name_en</th><th>cs_page</th></tr></thead><tbody id=\"focus_list_table_body\"></tbody></table>");
  }
  return div_focus_list;
}
