
/*
*
*	/utils/functions/UserBD.ts
*	
*/
'use server';

import { createClient } from "../supabase/server";
import { redirect } from "next/navigation";
import { insertActivite } from "@/utils/functions/ActiviteBD";
	
export const upsertUser = async ({	newUserId, 
									newNom, newPrenom, 
									newEmail, newFonctionId,
									newSocieteId, newUserAvecCompte,
									newMetierId }:
								{	newUserId: number,
									newNom: string, newPrenom: string,
									newEmail: string, newFonctionId: number,
									newSocieteId: number, newUserAvecCompte: boolean,
									newMetierId: number}) => {

	console.log("Entrée dans upsertUser", newUserId, newNom, newPrenom, newEmail, newFonctionId, 
								newSocieteId, newUserAvecCompte, newMetierId );
	const supabase = createClient();

	if (newUserId == 0) {

		const { error } = await supabase.from("personne").insert({
										persNom: newNom,
										persPrenom: newPrenom,
										persEmail: newEmail,
										fonctionId: newFonctionId,
										societeId: newSocieteId,
										persAvecCompte: newUserAvecCompte,
										metierId: newMetierId
										});

		if (error) {
			console.error("Error creating User", error)
			return { error }
		} else {
			const { error: error1 } = await insertActivite({
					actType: "Utilisateur", actSType: "Ajout", actMessage: newNom, actUser: "OPE1",
			});
			if (error1) {
				console.error("Error creating Activité", error1)
				return { error1 }
			}
		}
	}

	if (newUserId && newUserId > 0){

		const { error } = await (await supabase).from("personne").update({
								persNom: newNom,
								persPrenom: newPrenom,
								persEmail: newEmail,
								fonctionId: newFonctionId,
								societeId: newSocieteId,
								persAvecCompte: newUserAvecCompte,
								metierId: newMetierId
								})
								.eq("persId", newUserId);

		if (error) {
			console.error("Error updating User", error)
			return { error }
		} else {
			const { error: error1 } = await insertActivite({
					actType: "Utilisateur", actSType: "Modification", actMessage: newNom, actUser: "OPE1",
			});
			if (error1) {
				console.error("Error creating Activité", error1)
				return { error1 }
			}
		}
	}
	//revalidatePath("/users/userList");
  	redirect("/users/userList");

	return {message: "succès"};
}

export const getUserById = async (pId: number) => {
	//console.log("GetUserById entrée pId =", pId)
	const supabase = createClient()
	//const { data: user, error } = await supabase.rpc('sp_personne_id', {id: pId});
	const { data: vw_personne, error } = await (await supabase).from('vw_personne').select().eq("persId", pId)
	
	if (error) {
		console.log("GetUserById Error", error)
		return { error }
	} else {
		//console.log("getUserById user =", vw_personne)
		return { vw_personne }
	}
}

export const getUserByEmail = async (pEmail: string) => {
	//console.log("getUserByEmail entrée Mail =", pEmail)
	const supabase = createClient();
	//const { data: user, error } = await supabase.rpc('sp_personne_id', {id: pId});
	const { data: vw_personne, error } = await (await supabase).from("vw_personne").select("*").eq("persEmail", pEmail);
	
	if (error) {
		console.log("getUserByEmail Error", error);
		return { error };
	} else {
		//console.log("getUserByEmail user =", vw_personne);
		return { vw_personne };
	}
}

export const getUsersAll = async () => {
	
	const supabase = createClient();
	const role = "admin";
	const { data: vw_personne, error } = await supabase.from('vw_personne').select('*');
	
	if (error) {
		console.error("Error select users", error);
		return { error };
	} else {
		console.log("getUsersAll userList = ", vw_personne.length);
		return { vw_personne };
	}
}

export const deleteUser = async (persId: number) => {

	console.log("Entrée deleteUser", persId);
	const supabase = createClient();
	const { error } = await supabase.from('personne').delete().match({ persId });
	if (error) {
		console.error("Error deleting User", error)
		return { error }
	}

	const { error: error1 } = await insertActivite({
		actType: "Utilisateur", actSType: "Suppression", actMessage: persId.toString(), actUser: "OPE1",
	});
	if (error1) {
		console.error("Error mise à jour Activité", error1)
		return { error1 }
	}
	//revalidatePath('/');
	redirect("/users/userList");

	return {message: "succès"};
}