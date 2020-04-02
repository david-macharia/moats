export const ADD_APP="ADD_APP";
export const DELETE_NOTE="DELETE_NOTE";
export const TITLE_CONTENT_REQUIRED="TITLE_CONTENT_REQUIRED";
export const TOGGLE_APP="TOGGLE_APP";
export const APP_STATUS="APP_STATUS"
export const SHOW_EDIT_APP="SHOW_EDIT_APP";
export const ADD_PLATFORM="ADD_PLATFORM";
export const REMOVE_PLATFORM="REMOVE_PLATFORM";

export function addApp(app_name,description){
return {type:ADD_APP,'title':app_name,'content':description}
}
export function toggleApp(app_id){
  return {type:TOGGLE_APP,id:app_id}
}
export function changeAppStatus(app_id,activate){

  return {type:APP_STATUS,payload:{id:app_id,"activate":activate}}
}

export function showEditApp(app_id,activate){

  return {type:SHOW_EDIT_APP,payload:{id:app_id,"showEditApp":activate}}
}
export function addPlatform(app_id,platform_name){
  return {type:ADD_PLATFORM,payload:{id:app_id,"platform_name":platform_name}}
}
export function removePlatform(app_id,platform_name){
  return {type:REMOVE_PLATFORM,payload:{id:app_id,"platform_name":platform_name}}
}
