export interface ProjArch {
   id: number;
   type: string;
   name: string;
   year: number;
   description: string;
   image: string;

   pageA: string;
   pageB: string;
   pageC: string;
   pageD?: string;
   pageE?: string;
}


export interface ImgArch {
   imgId: number;
   projId: number;
   name: string;
   image: string;
   pageA: string;
   pageB: string;
   pageC: string;
   pageD?: string;
   pageE?: string;

}


export interface PageArch {
   imgId: number;
   projId: number;
   image: string;
}