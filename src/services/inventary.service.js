const rows = {
    production:[["Camisa gay", 10, 69, 12, 11, 8, 5],["Calzon con Hoyo", 10, 69, 12, 11, 8, 5]],
    MP:[["Tela comes", 10, 69, 12, 11],["Tela Meto", 10, 69, 12, 11]]
}
class InventaryService{
    async getAll(type){
        return rows[type]
    }
}
export const inventaryService = new InventaryService()