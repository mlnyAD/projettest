
/*
*
* utils/types.ts
* 
*/

export type ActiviteType = {
	activId: number;
	lmod: Date;
	activType: string;
	activSType: string;
	activMessage: string;
	activUser: string;
};

export type BiblTechType = {
	biblId: number;
	biblNom: string;
	biblTypeDoc: number;
	biblDateCreation: Date;
	biblCrit1: number;
	docCrit1: string;
	biblCrit2: number;
	docCrit2: string;
	biblCrit3: number;
	docCrit3: string;
	biblPath: string;
	docType: string;
}; //Vue

export type ConfigType = {
	configid: number;
	confignom: string;
	configtype: number;
	configtypenom: string;
};

export type CritGedType = {
	critGedId: number;
	critGedNom: string;
	critGedType: number;
	critGedTypeNom: string;
};

export type DocumentType = {
	docId: number;
	docTypeId: number;
	doctype: string;
	docNom: string;
	docRedacteur: number;
	docreadacteurnom: string;
	docDateCreation: Date;
	docEtatId: number;
	docetat: string;
	docStockage: string;
	dossierId: number;
	dossierident: string;
}; //Vue

export type DossierType = {
	id: number;
	dossierId: number;
	dossierIdent: string;
	dossierNom: string;
	dossierDescript: string;
	dossierAdresse: string;
	dossierCodePostal: string;
	dossierVille: string;
	dossierCreation: Date;
	dossierStatusId: number;
	dossieretat: string;
	dossierResponsable: string;
	dossierMOAId: number;
	dossiermoanom: string;
	dossierPilote: string;
	dossierCommentaires: string;
	dossierBudgetId: number;
	dossierbudgetNom: string;
	dossierOuvrageId: number;
	dossierovragenom: string;
	dossierMotifId: number;
	dossiermotifnom: string;
	dossierDureeVie: number;
	dossierT0: Date;
	dossierReceptionInit: Date;
	dossierReceptionActu: Date;
	dossierLivraisonInit: Date;
	dossierLivraisonActu: Date;
	dossierValidEtude: boolean;
	dossierValidEtudeComments: string;
	dossierChoixST: boolean;
	dossierChoixSTComments: string;
	dossierValidTravauxSuppl: boolean;
	dossierValidTravauxSupplComments: string;
	dossierDecompteDepenses: boolean;
	dossierDecompteDepensesComments: string;
	projetDevisHT: number;
	projetCommandeHT: number;
	dossierUUID: string;
	dossierPhoto: string;
}; //Vue

export type EltFinancierType = {
	ef_id : number;
	ef_ltid : number;
	ef_date : Date;
	ef_achat : boolean;
	ef_libelle : string;
	ef_valeurHT : number;
	ef_valeurTTC : number;
	ef_regle_le : Date;
	ef_reference : string;
};

export class ImageBucket {
	ib_id: number = 0;
	ib_nom: string = "";
	ib_path: string = "";
	ib_date: Date = new Date();
	ib_size: number = 0;
	ib_URL: string = "";
};

export type LotBudgetType = {
	lbId: number;
	lbNom: string;
	achat_total_ht: number;
	achat_total_ttc: number;
	vente_total_ht: number;
	vente_total_ttc: number;
	lbObservations: string;
	lbBudgetHT: number;
	lbDossierId: number;
	dossierident: string
	dossierid: number;
}; //Vue

export type LotTravType = {
	lottravId: number;
	lottravNom: string;
	lottravRespId: number;
	projectId: number;
	persemail: string;
	dossierIdent: string;
}; //Vue

export type PersByProjectType = {
	ppId: number;
	persId: number;
	projectId: number;
	projectIdent: string;
}; //Vue

export type PersonneType = {
	persId: number;
	persNom: string;
	persPrenom: string;
	persEmail: string;
	fonctionId: number;
	societeId: number;
	persAvecCompte: boolean;
	metierId: number;
	dossierId: number;
	lottravId: number;
	perssociete: string;
	persfonction: string;
	persmetier: string;
}; //Vue

export type ReunionType = {
	reunionId: number;
	reunionObjet: string;
	reunionDateHeure: Date;
	reunionDuree: number;
	reunionAdresse: string;
	reunionPiloteId: number;
	reunionpilotenom: string;
	reunionTypeId: number;
	reuniontype: string;
	reunionEtatId: number;
	reunionetat: string;
	reunionCR: boolean;
	reunionCommentaires: string;
	projectId: number;
	dossierIdent: number;
	lottravId: number;
	lottravNom: string;
}; //Vue

export type Session = {
	asSessionId: number;
	asUserMail: string;
	asProjectId: number;
	asProjectIdent: string;
	asProjectName: string;
	asLottravId: number;
	asLottravNom: string;
	persnom: string;
	persprenom: string;
}; //Vue

export type SocieteType = {
	societeId: number;
	societeNom: string;
	societeAdresse1: string;
	societeAdresse2: string;
	societeAdresse3: string;
	societeVille: string;
	societeCodePosta: string;
};

export type TaskType = {
	taskId: number;
	taskNom: string;
	taskResponsableId: number;
	persEmail: string;
	taskStart: Date;
	taskEnd: Date;
	taskDuree: number;
	taskAvancement: number;
	taskEtatId: number;
	nom: string;
	lottravId: number;
	lottravNom: string;
	projectId: number;
	dossierIdent: string;
}; //Vue

export type TodoType = {
	todo_id: number;
	todo_creation: Date;
	todo_cloture: Date;
	todo_titre: string;
	todo_text: string;
	todo_important: boolean;
	todo_urgent: boolean;
	todo_etatId: number;
	todo_etatNom: string;
	todo_useremail: string;
};

export type UserType = {
	persId: number;
	persNom: string;
	persPrenom: string;
	persEmail: string;
	fonctionId: number;
	societeId: number;
	persAvecCompte: boolean;
	metierId: number;
};
/* structure table supabase.storage.objects :
bucket_id:"projects"
created_at:"2024-10-22T06:17:40.188521+00:00"
id:"a2f9db45-4a2a-47d7-adb6-e5e0e12d0fbb"
last_accessed_at:"2024-10-22T06:17:40.188521+00:00"
metadata: 
	{eTag: '"1ca0775d52709a18b3c880c5becb2594"',
		size: 186620, mimetype: 'image/png',
		cacheControl: 'max-age=3600',
		lastModified: '2024-10-22T06:17:41.000Z',
		mimetype: "image/png",
		httpStatusCode:200
		size: 186620}
name:"images/monImage3"
owner:"3dfa7229-4366-4e6d-9645-5d44ea373e1e"
owner_id:"3dfa7229-4366-4e6d-9645-5d44ea373e1e"
path_tokens: Array(3)
	0:"71a0ea19-9690-4562-997a-e5623ba398d9"
	1:"Photo chantier"
	2:"GS2E.png"
	length:3
updated_at:"2024-10-22T06:17:40.188521+00:00"
user_metadata:{}
version:"54b0c2a4-9b8c-4975-9d9a-5b614c519f5b"
*/
