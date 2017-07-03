// Compiled by ClojureScript 1.9.473 {:elide-asserts true}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__8076__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__8076 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8077__i = 0, G__8077__a = new Array(arguments.length -  0);
while (G__8077__i < G__8077__a.length) {G__8077__a[G__8077__i] = arguments[G__8077__i + 0]; ++G__8077__i;}
  args = new cljs.core.IndexedSeq(G__8077__a,0);
} 
return G__8076__delegate.call(this,args);};
G__8076.cljs$lang$maxFixedArity = 0;
G__8076.cljs$lang$applyTo = (function (arglist__8078){
var args = cljs.core.seq(arglist__8078);
return G__8076__delegate(args);
});
G__8076.cljs$core$IFn$_invoke$arity$variadic = G__8076__delegate;
return G__8076;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__8079__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__8079 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8080__i = 0, G__8080__a = new Array(arguments.length -  0);
while (G__8080__i < G__8080__a.length) {G__8080__a[G__8080__i] = arguments[G__8080__i + 0]; ++G__8080__i;}
  args = new cljs.core.IndexedSeq(G__8080__a,0);
} 
return G__8079__delegate.call(this,args);};
G__8079.cljs$lang$maxFixedArity = 0;
G__8079.cljs$lang$applyTo = (function (arglist__8081){
var args = cljs.core.seq(arglist__8081);
return G__8079__delegate(args);
});
G__8079.cljs$core$IFn$_invoke$arity$variadic = G__8079__delegate;
return G__8079;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map