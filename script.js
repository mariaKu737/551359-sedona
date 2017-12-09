function initPage() {
    const elements = {
        formsearch: {
            formOpenOrCloseButton: $(".button-form-open"),
            form: $(".form-search")
        }
    }

    elements.formsearch.formOpenOrCloseButton.on('click', function() {
        if (elements.formsearch.form.css('display') == 'none' ) {
            elements.formsearch.form.show();
          }
        else
            elements.formsearch.form.hide();
    });
}

$(function() {
    initPage();
})