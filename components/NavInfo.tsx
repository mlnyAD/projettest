/*
 *
 * /components/NavInfo.tsx
 *
 */

"use client";

import { useSession } from "@/app/sessionStore";


export function NavInfo() {

	let libelle: string = "Information";
	const {userEmail, userNom, userPrenom, projectId, projectIdent, projectNom, lotTravId, lotTravNom} = useSession();

	//console.log ("NavInfo entrée ", projectIdent);

	if (projectId == 0) {
		libelle = "Pas de projet sélectionné";
	} else {
		libelle = "Vous travaillez sur le projet " + projectIdent;
	}

	/*libelle = 	userEmail + '/' +
				userNom + '/' +
				userPrenom + '/' +
				projectId + '/' +
				projectIdent + '/' +
				projectNom + '/' +
				lotTravId + '/' +
				lotTravNom + '/';*/

	/*console.log("NavInfo = ", userEmail + '/' +
		userNom + '/' +
		userPrenom + '/' +
		projectId + '/' +
		projectIdent + '/' +
		lotTravId + '/' +
		lotTravNom + '/' );*/

	return (
		<>
			<p>{libelle}</p>
		</>
	)
};
		