function initPage() {
    const elements = {
        formsearch: {
            formOpenOrCloseButton: $(".button-form-open"),
            form: $(".form-search"),
            arrivalDate: $("#arrival-date"),
            departureDate: $("#date-departure"),
            searchButton: $(".button-search")
        }
    };

    elements.formsearch.formOpenOrCloseButton.on('click', function() {
        if (elements.formsearch.form.hasClass('modal-out')) {
            elements.formsearch.form.removeClass('modal-out');
            elements.formsearch.form.removeClass('modal-error');
            elements.formsearch.form.addClass('modal-in');
        }
        else
        {
            elements.formsearch.form.removeClass('modal-in');
            elements.formsearch.form.removeClass('modal-error');
            elements.formsearch.form.addClass('modal-out'); 
        }
    });

    elements.formsearch.searchButton.on('click', function(e) {
        if(elements.formsearch.arrivalDate.val() == '' || elements.formsearch.departureDate.val() == '')
        {
            elements.formsearch.form.removeClass('modal-error');
            e.preventDefault();
            elements.formsearch.form.addClass('modal-error');
        }
    });
}

$(function() {
    initPage();
})