import $ from 'jquery';
import 'jquery-maxlength';
import 'avgrund';
import 'bootstrap-table';

(function($) {
  'use strict';
  $('input').maxlength();
  $('body').avgrund();
  $('table').bootstrapTable();
})(jQuery);