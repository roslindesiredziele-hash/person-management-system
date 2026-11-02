export interface Person{
   name: string;
   surname: string;
   age: number;
   pet? : string;
}

export interface PersonDb extends Person{
   id: number;
}