var programming_name = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  prefetch: {
    url: 'assets/programming_name.json',
    filter: function(list) {
      return $.map(list, function(programming_name) {
        return { name: programming_name }; });
    }
  }
});
programming_name.initialize();

var programming = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('text'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  prefetch: 'assets/programming.json'
});
programming.initialize();

/**
 * Typeahead
 */
var elt = $('.example_typeahead > > input');
elt.tagsinput({
  typeaheadjs: {
    name: 'programming_name',
    displayKey: 'name',
    valueKey: 'name',
    source: programming_name.ttAdapter()
  }
});

/**
 * Objects as tags
 */
elt = $('.example_objects_as_tags > > input');
elt.tagsinput({
  itemValue: 'value',
  itemText: 'text',
  typeaheadjs: {
    name: 'programming',
    displayKey: 'text',
    source: programming.ttAdapter()
  }
});

elt.tagsinput('add', { "value": "Python" , "text": "Python" });
elt.tagsinput('add', { "value": "C++" , "text": "C++" });
elt.tagsinput('add', { "value": "Java" , "text": "Java" });
elt.tagsinput('add', { "value": "C" , "text": "C" });
// elt.tagsinput('add', { "value": "C#" , "text": "C#" });

/**
 * Categorizing tags
 */
elt = $('.example_tagclass > > input');
elt.tagsinput({
  tagClass: function(item) {
    switch (item.continent) {
      case 'Europe'   : return 'label label-primary';
      case 'America'  : return 'label label-danger label-important';
      case 'Australia': return 'label label-success';
      case 'Africa'   : return 'label label-default';
      case 'Asia'     : return 'label label-warning';
    }
  },
  itemValue: 'value',
  itemText: 'text',
  // typeaheadjs: {
  //   name: 'programming',
  //   displayKey: 'text',
  //   source: programming.ttAdapter()
  // }
  typeaheadjs: [
  {
      hint: true,
     highlight: true,
     minLength: 2
  },
   {
      name: 'programming',
       displayKey: 'text',
       source: programming.ttAdapter()
   }
  ]
});
elt.tagsinput('add', { "value": "Python" , "text": "Python" });
elt.tagsinput('add', { "value": "C++" , "text": "C++" });
elt.tagsinput('add', { "value": "Java" , "text": "Java" });
elt.tagsinput('add', { "value": "C" , "text": "C" });
// elt.tagsinput('add', { "value": "C#" , "text": "C#" });

// HACK: overrule hardcoded display inline-block of typeahead.js
$(".twitter-typeahead").css('display', 'inline');
