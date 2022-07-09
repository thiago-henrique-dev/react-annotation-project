const Annotation = require('../models/AnnotationData')

module.exports = {

    async read(request, response) {
      const annotationList = await Annotation.find()

      return response.json(annotationList)
    },



   async create(request, response){
      console.log(request.body)
      const { title, notes, priority} = request.body;

      if(!notes || !title){
        return response.status(400).json({ error: "Necessario um título/annotação"})
      }

      const annotationCreated = await Annotation.create({
        title,
        notes,
        priority
      });

      return response.json(annotationCreated)
    },

    async delete(request, response){
        const { id } = request.params;

         const annotationDeleted = await Annotation.findByIdAndDelete({ _id: id})   

         if (annotationDeleted){
            return response.json(annotationDeleted)
         }

         return response.status(401).json({ error: 'Não foi encontrado o registro para deletar'})
    }


}