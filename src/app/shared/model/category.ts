export class Categories {
  id: number;
  name: string;
  typeImg: string;

  public static createCategories(categ: any): Categories[]{
    let objects: Categories[] = [];
    if(categ instanceof Array){
        objects = categ.map(function(resp) {
        return Categories.createCategorie(resp);
    });
    }
    return objects;
  }

  public static createCategorie(categ: any): Categories{
      const object = new Categories();
      object.id = categ.id ? categ.categ : null;
      object.name = categ.name? categ.name : '';
      object.typeImg = categ.typeImg ? categ.typeImg : '';

      return object;
  }
}
