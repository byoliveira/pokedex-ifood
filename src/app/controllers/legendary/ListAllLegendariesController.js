const ListLegendariesService = require('../../services/legendary/ListLegendariesService');

class ListAllLegendariesController {
    constructor() { }

    index(request, response) {
        const listLegendaries = ListLegendariesService.listLegendariesService()
        response.json(listLegendaries)
    }
}

export default ListAllLegendariesController;