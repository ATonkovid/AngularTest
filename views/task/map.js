function(doc){
	if(doc.type == 'task'){
		emit(doc._id, doc);
	}
	if(doc.type == 'comment'){
        emit(doc.task, doc);
    }
}