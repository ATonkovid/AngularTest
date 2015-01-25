function(doc){
    if(doc.type == 'comment'){
        emit(doc.id, doc);
    }
}