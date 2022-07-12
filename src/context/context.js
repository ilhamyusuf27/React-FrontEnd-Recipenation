import { createContext, useEffect, useState } from 'react';

export const Context = createContext();

// export function useAppContext() {
// 	return useContext(Context);
// }

export function ProviderContext({ children }) {
	const [item, setItems] = useState([]);
	const [isLogin, setIsLogin] = useState(false);

	useEffect(() => {
		if (localStorage.getItem('token')) {
			setIsLogin(true);
			setItems(JSON.parse(localStorage.getItem('data')));
		}
	}, []);

	const contextValue = {
		item,
		isLogin,
	};
	return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}
