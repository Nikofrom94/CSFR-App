
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


/** return the block displaying the list of abilities */
function getDIVAbilities(){
  let div_ab_list = document.getElementById("ab_list");
  if(div_ab_list == null){
    const div_ab_list = document.createElement("div");
    div_ab_list.id = "ab_list";
    const ab_list_search = document.createElement("input");
    ab_list_search.id = "ab_list_search";
    ab_list_search.onkeyup = "ab_list_search()";
    ab_list_search.placeholder = "Search for names..";
    div_ab_list.append(ab_list_search);
    div_ab_list.append("<table class=\"table table-striped\"><thead><tr><th>ID</th><th>Name</th><th>Name_en</th><th>cs_page</th></tr></thead><tbody id=\"ab_table_body\"></tbody></table>");
  }
  return div_ab_list;
}