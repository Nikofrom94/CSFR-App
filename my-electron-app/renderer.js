const func = async () => {
    const response = await window.versions.ping()
    console.log(response) // prints out 'pong'

    const json_data = window.json_data.getData();
    console.log(json_data);
    const focus_list =json_data.focus_list;
    focus_list.array.forEach(element => {
      const f_id = "<td>"+element.id+"</td>";
      const f_name = "<td>"+element.name+"</td>";
      const f_name_en = "<td>"+element.name_en+"</td>";
      const f_description = "<td>"+element.description+"</td>";
      const f_cs_page = "<td>"+element.cs_page+"</td>";
      $("#focus_table_body").append("<tr>"+f_id+f_name+f_name_en+f_description+f_cs_page+"</tr>")
    });
  }
  
  func();

  