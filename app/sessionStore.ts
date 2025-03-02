/*
*
* app/sessionStore.ts
* https://www.youtube.com/watch?v=a1k_TgmKQ5M&ab_channel=Grafikart.fr
* https://www.youtube.com/watch?v=a1k_TgmKQ5M&t=224s&ab_channel=Grafikart.fr
* 
*/

import { create } from "zustand";

export type SessionState = {
	userEmail: string;
	userNom: string;
	userPrenom: string;
	projectId: number;
	projectIdent: string;
	projectNom: string;
    lotTravId: number;
	lotTravNom: string;
}

export const useSession = create<SessionState>((set) => ({
	userEmail: "",
	userNom: "",
	userPrenom: "",
	projectId: 0,
	projectIdent: "",
	projectNom: "",
    lotTravId: 0,
	lotTravNom: "",
}))

export const globalUpdateEmail = (pEmail: string) => {
	useSession.setState({userEmail: pEmail});
	//console.log("globalUpdateEmail = ", pEmail);
}

export const globalUpdateUserNom = (pNom: string) => {
	useSession.setState({userNom: pNom});
	//console.log("globalUpdateUserNom = ", pNom);
}

export const globalUpdateUserPrenom = (pPrenom: string) => {
	useSession.setState({userPrenom: pPrenom});
	//console.log("globalUpdateUserPrenom = ", pPrenom);
}

export const globalUpdateProjectId = (pProjectId: number) => {
	useSession.setState({projectId: pProjectId});
	//console.log("globalUpdateProjectId = ", pProjectId);
}

export const globalUpdateProjectIdent = (pProjectIdent: string) => {
	useSession.setState({projectIdent: pProjectIdent});
	//console.log("globalUpdateProjectIdent = ", pProjectIdent);
}

export const globalUpdateProjectNom = (pProjectNom: string) => {
	useSession.setState({projectNom: pProjectNom});
	//console.log("globalUpdateProjectNom = ", pProjectNom);
}

export const globalUpdateLotTravId = (pLotTravId: number) => {
	useSession.setState({lotTravId: pLotTravId});
	//console.log("globalUpdateLotTravId = ", pLotTravId);
}

export const globalUpdateLotTravNom = (pLotTravNom: string) => {
	useSession.setState({lotTravNom: pLotTravNom});
	//console.log("globalUpdateLotTravNom = ", pLotTravNom);
}