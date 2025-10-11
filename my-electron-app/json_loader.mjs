import { createRequire } from 'module';
const require = createRequire(import.meta.url);

export function get_data(json_file){
    console.log('Loading JSON from' + json_file);
      const cscg_json = require( json_file )
      let ab_categ_list = [];
      let ab_list = [];
      let charactertype_list = []
      let flavor_list = [];
      let descriptor_list = [];
      let focusabilities_map = new Map();
      let focus_list=[];
      let initiallink_list = [];
  
      for (let i = 0; i < cscg_json.length; i++) {
        const cscg_model = cscg_json[i];
        if(cscg_model.model == "cscg.abilitycategory"){
          const row = get_ab_categ(cscg_model);
          if(row != null){
              ab_categ_list.push(row);
          }
        }else if(cscg_model.model == "cscg.ability"){
          const row = get_ab(cscg_model);
          if(row != null){
              ab_list.push(row);
          }
        }else if(cscg_model.model == "cscg.charactertype"){
          const row = get_charactertype(cscg_model);
          if(row != null){
              charactertype_list.push(row);
          }
        }else if(cscg_model.model == "cscg.flavor"){
          const row = get_flavor(cscg_model);
          if(row != null){
              flavor_list.push(row);
          }
        }else if(cscg_model.model == "cscg.descriptor"){
          const row = get_descriptor(cscg_model);
          if(row != null){
              descriptor_list.push(row);
          }
        }else if(cscg_model.model == "cscg.focusabilities"){
          const row = get_focusabilities(cscg_model);
          if(row != null){
              focusabilities_map.set(row.id,row)
          }
        }else if(cscg_model.model == "cscg.focus"){
          const row = get_focus(cscg_model);
          if(row != null){
              focus_list.push(row)
          }
        }else if(cscg_model.model == "cscg.initiallink"){
          const row = get_initiallink(cscg_model);
          if(row != null){
              initiallink_list.push(row)
          }
        }
      }
      const data = {
          ab_categ_list:ab_categ_list,
          ab_list:ab_list,
          charactertype_list:charactertype_list,
          flavor_list:flavor_list,
          descriptor_list:descriptor_list,
          focusabilities_map:focusabilities_map,
          focus_list:focus_list,
          initiallink_list:initiallink_list,
      };
      console.log('data loaded.');
      return data;
  }
  
  function get_ab(cscg_model){
      if(cscg_model.fields.name.length>0){
        return {
          id: cscg_model.pk,
          name: cscg_model.fields.name,
          name_en: cscg_model.fields.name_en,
          stat:  cscg_model.fields.stat,
          stat_cost:  cscg_model.fields.stat_cost,
          tier:  cscg_model.fields.tier,
          description: cscg_model.fields.description,
          cs_page: cscg_model.fields.cs_page,
          categories: cscg_model.fields.categories
          };
      }else{
          return null;
      }
  }
  
  function get_initiallink(cscg_model){
      if(cscg_model.fields.description.length>0){
        return {
          id: cscg_model.pk,
          description: cscg_model.fields.description,
          };
      }else{
          return null;
      }
  }
  
  function get_descriptor(cscg_model){
      if(cscg_model.fields.name.length>0){
        return {
          id: cscg_model.pk,
          name: cscg_model.fields.name,
          name_en: cscg_model.fields.name_en,
          description: cscg_model.fields.description,
          cs_page: cscg_model.fields.cs_page,
          characteristics: cscg_model.fields.characteristics,
          initial_links: cscg_model.fields.initial_links,
          };
      }else{
          return null;
      }
  }
  
  function get_ab_categ(cscg_model){
      if(cscg_model.fields.name.length>0){
        return {
          id: cscg_model.pk,
          name: cscg_model.fields.name,
          name_en: cscg_model.fields.name_en,
          description: cscg_model.fields.description,
          cs_page: cscg_model.fields.cs_page,
          };
      }else{
          return null;
      }
  }
  
  function get_flavor(cscg_model){
      if(cscg_model.fields.name.length>0){
        return {
          id: cscg_model.pk,
          name: cscg_model.fields.name,
          name_en: '',
          description: cscg_model.fields.description,
          cs_page: '',
          abilities_tier1: cscg_model.fields.abilities_tier1,
          abilities_tier2: cscg_model.fields.abilities_tier2,
          abilities_tier3: cscg_model.fields.abilities_tier3,
          abilities_tier4: cscg_model.fields.abilities_tier4,
          abilities_tier5: cscg_model.fields.abilities_tier5,
          abilities_tier6: cscg_model.fields.abilities_tier6,
          };
      }else{
          return null;
      }
  }
  
  function get_focusabilities(cscg_model){
      return {
          id: cscg_model.pk,
          abilities: cscg_model.fields.abilities,
          abilities_to_choose: cscg_model.fields.abilities_to_choose,
      };
  }
  
  function get_focus(cscg_model){
      if(cscg_model.fields.name.length>0){
        return {
          id: cscg_model.pk,
          name: cscg_model.fields.name,
          name_en: cscg_model.fields.name_en,
          description: cscg_model.fields.description,
          cs_page: '',
          abilities_tier1: cscg_model.fields.abilities_tier1,
          abilities_tier2: cscg_model.fields.abilities_tier2,
          abilities_tier3: cscg_model.fields.abilities_tier3,
          abilities_tier4: cscg_model.fields.abilities_tier4,
          abilities_tier5: cscg_model.fields.abilities_tier5,
          abilities_tier6: cscg_model.fields.abilities_tier6,
          };
      }else{
          return null;
      }
  }
  
  function get_charactertype(cscg_model){
      if(cscg_model.fields.name.length>0){
        return {
          id: cscg_model.pk,
          name: cscg_model.fields.name,
          name_en: '',
          description: cscg_model.fields.description,
          cs_page: cscg_model.fields.cs_page,
          might_start: cscg_model.fields.might_start,
          speed_start: cscg_model.fields.speed_start,
          intellect_start: cscg_model.fields.intellect_start,
          might_edge_start: cscg_model.fields.might_edge_start,
          speed_edge_start: cscg_model.fields.speed_edge_start,
          intellect_edge_start: cscg_model.fields.intellect_edge_start,
          cyphers_start: cscg_model.fields.cyphers_start,
          abilities_tier1: cscg_model.fields.abilities_tier1,
          abilities_tier2: cscg_model.fields.abilities_tier2,
          abilities_tier3: cscg_model.fields.abilities_tier3,
          abilities_tier4: cscg_model.fields.abilities_tier4,
          abilities_tier5: cscg_model.fields.abilities_tier5,
          abilities_tier6: cscg_model.fields.abilities_tier6,
          };
      }else{
          return null;
      }
  }
  
  