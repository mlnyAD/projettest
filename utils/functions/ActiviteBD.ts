/*
 *
 *	/utils/functions/ActiviteBD.ts
 *
 */
 "use server"

 
 import { createClient } from "../supabase/server"
 import { redirect } from "next/navigation"
 
 export const insertActivite = async ({ actType, actSType, actMessage, actUser } : 
			 { actType: string; actSType: string; actMessage: string; actUser: string }) => {
				 
	 console.log("Insert Activite", actType, actSType, actMessage, actUser)
 
	 const supabase = createClient()
	 const { error } = await (await supabase).from("activite").insert({
														 activType: actType,
														 activSType: actSType,
														 activMessage: actMessage,
														 activUser: actUser,
	 })
	 /*
	 const { error } = await supabase.rpc('sp_config_insert', {
								 /*	pconfigType: typeId,
									 pconfigTypeNom: typeName,
									 pconfigNom: cfgNom*/
	 /*						typeId, typeName, cfgNom
									 });   */
 
	 //console.log("Création activité", actMessage)
 
	 if (error) {
		 console.error("Error creating Activite", error)
		 return { error }
	 }
	 return { message: "succès" }
 }
 
 //ToDo : à reprendre
 export const getActivitesAll = async () => {
	 const supabase = createClient()
	 const role = "admin"
	 //const { data: configList, error } = await supabase.from("config").select();
	 const { data: activiteList, error } = await (await supabase).rpc("sp_activite_all")
	 if (error) {
		 console.error("Error geActivitesAll")
		 return { error }
	 } else {
		 //console.log("geActivitesAll", activiteList)
		 return { activiteList }
	 }
 }
 
 export const deleteActivite = async (activId: number) => {
	 console.log("Entrée deleteActivite", activId)
	 const supabase = createClient()
	 const { error } = await (await supabase).from("activite").delete().match({ activId })
	 if (error) {
		 return {
			 message: error.message,
		 }
	 }
	 
	 //revalidatePath("/")
	 redirect("/activites/activiteList")
 
	 return { message: "succès" }
 }
 