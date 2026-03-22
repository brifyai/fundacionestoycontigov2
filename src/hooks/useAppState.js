import { createContext, useContext, useReducer, useCallback } from 'react';

// Estado inicial de la aplicación
const initialState = {
  // Estado de navegación
  navigation: {
    currentSection: 'home',
    isMenuOpen: false,
    history: []
  },
  
  // Estado de UI
  ui: {
    isLoading: false,
    notifications: [],
    modal: null
  },
  
  // Estado de formularios
  forms: {
    contact: {
      data: {
        nombre: '',
        email: '',
        asunto: '',
        mensaje: ''
      },
      errors: {},
      isSubmitting: false,
      isSuccess: false
    }
  },
  
  // Estado de preferencias del usuario
  preferences: {
    theme: 'light',
    language: 'es',
    reducedMotion: false,
    highContrast: false
  }
};

// Action types
const ACTIONS = {
  // Navegación
  SET_CURRENT_SECTION: 'SET_CURRENT_SECTION',
  TOGGLE_MENU: 'TOGGLE_MENU',
  SET_MENU_OPEN: 'SET_MENU_OPEN',
  
  // UI
  SET_LOADING: 'SET_LOADING',
  ADD_NOTIFICATION: 'ADD_NOTIFICATION',
  REMOVE_NOTIFICATION: 'REMOVE_NOTIFICATION',
  SET_MODAL: 'SET_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
  
  // Formularios
  UPDATE_FORM_DATA: 'UPDATE_FORM_DATA',
  SET_FORM_ERRORS: 'SET_FORM_ERRORS',
  SET_FORM_SUBMITTING: 'SET_FORM_SUBMITTING',
  SET_FORM_SUCCESS: 'SET_FORM_SUCCESS',
  RESET_FORM: 'RESET_FORM',
  
  // Preferencias
  SET_THEME: 'SET_THEME',
  SET_LANGUAGE: 'SET_LANGUAGE',
  TOGGLE_REDUCED_MOTION: 'TOGGLE_REDUCED_MOTION',
  TOGGLE_HIGH_CONTRAST: 'TOGGLE_HIGH_CONTRAST'
};

// Reducer
function appReducer(state, action) {
  switch (action.type) {
    // Navegación
    case ACTIONS.SET_CURRENT_SECTION:
      return {
        ...state,
        navigation: {
          ...state.navigation,
          currentSection: action.payload,
          history: [...state.navigation.history, action.payload]
        }
      };
      
    case ACTIONS.TOGGLE_MENU:
      return {
        ...state,
        navigation: {
          ...state.navigation,
          isMenuOpen: !state.navigation.isMenuOpen
        }
      };
      
    case ACTIONS.SET_MENU_OPEN:
      return {
        ...state,
        navigation: {
          ...state.navigation,
          isMenuOpen: action.payload
        }
      };
    
    // UI
    case ACTIONS.SET_LOADING:
      return {
        ...state,
        ui: {
          ...state.ui,
          isLoading: action.payload
        }
      };
      
    case ACTIONS.ADD_NOTIFICATION:
      return {
        ...state,
        ui: {
          ...state.ui,
          notifications: [
            ...state.ui.notifications,
            { id: Date.now(), ...action.payload }
          ]
        }
      };
      
    case ACTIONS.REMOVE_NOTIFICATION:
      return {
        ...state,
        ui: {
          ...state.ui,
          notifications: state.ui.notifications.filter(
            n => n.id !== action.payload
          )
        }
      };
      
    case ACTIONS.SET_MODAL:
      return {
        ...state,
        ui: {
          ...state.ui,
          modal: action.payload
        }
      };
      
    case ACTIONS.CLOSE_MODAL:
      return {
        ...state,
        ui: {
          ...state.ui,
          modal: null
        }
      };
    
    // Formularios
    case ACTIONS.UPDATE_FORM_DATA:
      return {
        ...state,
        forms: {
          ...state.forms,
          [action.payload.formName]: {
            ...state.forms[action.payload.formName],
            data: {
              ...state.forms[action.payload.formName].data,
              ...action.payload.data
            }
          }
        }
      };
      
    case ACTIONS.SET_FORM_ERRORS:
      return {
        ...state,
        forms: {
          ...state.forms,
          [action.payload.formName]: {
            ...state.forms[action.payload.formName],
            errors: action.payload.errors
          }
        }
      };
      
    case ACTIONS.SET_FORM_SUBMITTING:
      return {
        ...state,
        forms: {
          ...state.forms,
          [action.payload.formName]: {
            ...state.forms[action.payload.formName],
            isSubmitting: action.payload.isSubmitting
          }
        }
      };
      
    case ACTIONS.SET_FORM_SUCCESS:
      return {
        ...state,
        forms: {
          ...state.forms,
          [action.payload.formName]: {
            ...state.forms[action.payload.formName],
            isSuccess: action.payload.isSuccess
          }
        }
      };
      
    case ACTIONS.RESET_FORM:
      return {
        ...state,
        forms: {
          ...state.forms,
          [action.payload]: {
            ...initialState.forms[action.payload]
          }
        }
      };
    
    // Preferencias
    case ACTIONS.SET_THEME:
      return {
        ...state,
        preferences: {
          ...state.preferences,
          theme: action.payload
        }
      };
      
    case ACTIONS.SET_LANGUAGE:
      return {
        ...state,
        preferences: {
          ...state.preferences,
          language: action.payload
        }
      };
      
    case ACTIONS.TOGGLE_REDUCED_MOTION:
      return {
        ...state,
        preferences: {
          ...state.preferences,
          reducedMotion: !state.preferences.reducedMotion
        }
      };
      
    case ACTIONS.TOGGLE_HIGH_CONTRAST:
      return {
        ...state,
        preferences: {
          ...state.preferences,
          highContrast: !state.preferences.highContrast
        }
      };
    
    default:
      return state;
  }
}

// Context
const AppStateContext = createContext();
const AppDispatchContext = createContext();

// Provider
export function AppStateProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);
  
  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
}

// Hooks personalizados
export function useAppState() {
  const context = useContext(AppStateContext);
  if (context === undefined) {
    throw new Error('useAppState debe usarse dentro de AppStateProvider');
  }
  return context;
}

export function useAppDispatch() {
  const context = useContext(AppDispatchContext);
  if (context === undefined) {
    throw new Error('useAppDispatch debe usarse dentro de AppStateProvider');
  }
  return context;
}

// Hooks de conveniencia
export function useNavigation() {
  const state = useAppState();
  const dispatch = useAppDispatch();
  
  const setCurrentSection = useCallback((section) => {
    dispatch({ type: ACTIONS.SET_CURRENT_SECTION, payload: section });
  }, [dispatch]);
  
  const toggleMenu = useCallback(() => {
    dispatch({ type: ACTIONS.TOGGLE_MENU });
  }, [dispatch]);
  
  const setMenuOpen = useCallback((isOpen) => {
    dispatch({ type: ACTIONS.SET_MENU_OPEN, payload: isOpen });
  }, [dispatch]);
  
  return {
    ...state.navigation,
    setCurrentSection,
    toggleMenu,
    setMenuOpen
  };
}

export function useUI() {
  const state = useAppState();
  const dispatch = useAppDispatch();
  
  const setLoading = useCallback((isLoading) => {
    dispatch({ type: ACTIONS.SET_LOADING, payload: isLoading });
  }, [dispatch]);
  
  const addNotification = useCallback((notification) => {
    dispatch({ type: ACTIONS.ADD_NOTIFICATION, payload: notification });
  }, [dispatch]);
  
  const removeNotification = useCallback((id) => {
    dispatch({ type: ACTIONS.REMOVE_NOTIFICATION, payload: id });
  }, [dispatch]);
  
  const setModal = useCallback((modal) => {
    dispatch({ type: ACTIONS.SET_MODAL, payload: modal });
  }, [dispatch]);
  
  const closeModal = useCallback(() => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  }, [dispatch]);
  
  return {
    ...state.ui,
    setLoading,
    addNotification,
    removeNotification,
    setModal,
    closeModal
  };
}

export function useForm(formName) {
  const state = useAppState();
  const dispatch = useAppDispatch();
  
  const form = state.forms[formName] || initialState.forms.contact;
  
  const updateData = useCallback((data) => {
    dispatch({
      type: ACTIONS.UPDATE_FORM_DATA,
      payload: { formName, data }
    });
  }, [dispatch, formName]);
  
  const setErrors = useCallback((errors) => {
    dispatch({
      type: ACTIONS.SET_FORM_ERRORS,
      payload: { formName, errors }
    });
  }, [dispatch, formName]);
  
  const setSubmitting = useCallback((isSubmitting) => {
    dispatch({
      type: ACTIONS.SET_FORM_SUBMITTING,
      payload: { formName, isSubmitting }
    });
  }, [dispatch, formName]);
  
  const setSuccess = useCallback((isSuccess) => {
    dispatch({
      type: ACTIONS.SET_FORM_SUCCESS,
      payload: { formName, isSuccess }
    });
  }, [dispatch, formName]);
  
  const reset = useCallback(() => {
    dispatch({ type: ACTIONS.RESET_FORM, payload: formName });
  }, [dispatch, formName]);
  
  return {
    ...form,
    updateData,
    setErrors,
    setSubmitting,
    setSuccess,
    reset
  };
}

export function usePreferences() {
  const state = useAppState();
  const dispatch = useAppDispatch();
  
  const setTheme = useCallback((theme) => {
    dispatch({ type: ACTIONS.SET_THEME, payload: theme });
  }, [dispatch]);
  
  const setLanguage = useCallback((language) => {
    dispatch({ type: ACTIONS.SET_LANGUAGE, payload: language });
  }, [dispatch]);
  
  const toggleReducedMotion = useCallback(() => {
    dispatch({ type: ACTIONS.TOGGLE_REDUCED_MOTION });
  }, [dispatch]);
  
  const toggleHighContrast = useCallback(() => {
    dispatch({ type: ACTIONS.TOGGLE_HIGH_CONTRAST });
  }, [dispatch]);
  
  return {
    ...state.preferences,
    setTheme,
    setLanguage,
    toggleReducedMotion,
    toggleHighContrast
  };
}

export { ACTIONS };