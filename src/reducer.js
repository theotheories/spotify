export const initialState = {
    user: null,
    //change this later 
    token: "BQD7kiW1xOElMd2TaH7lNasUtBA4vJT2rYOXlxfVZCbuBGdkJpeD8C-pt-V7j3nqppzQJWaA8n4maQ1IQPg5RJlo6gc0XJCb3oPV0lMP21EVFnOD3c8UW760h6GBIVTK9voTedHdQ-Rb_JKW9pTgWp58upNn3ulh4Q",
    playlists: [],
    playing: false,
    item: null,
  };
  
  const reducer = (state, action) => {
    console.log(action);
  
    switch (action.type) {
      case "SET_USER":
        return {
          ...state,
          user: action.user,
        };
      case "SET_TOKEN":
        return {
          ...state,
          token: action.token,
        };
      case "SET_PLAYLISTS":
        return {
          ...state,
          playlists: action.playlists,
        };
      case "SET_DISCOVER_WEEKLY":
        return {
          ...state,
          discover_weekly: action.discover_weekly,
        };
      default:
        return state;
    }
  };
  
  export default reducer