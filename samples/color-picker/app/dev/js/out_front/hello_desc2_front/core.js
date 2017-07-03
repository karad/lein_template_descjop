// Compiled by ClojureScript 1.9.473 {:elide-asserts true}
goog.provide('hello_desc2_front.core');
goog.require('cljs.core');
goog.require('reagent.core');
if(typeof hello_desc2_front.core.state !== 'undefined'){
} else {
hello_desc2_front.core.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),"Pick a color"], null));
}
hello_desc2_front.core.root_component = (function hello_desc2_front$core$root_component(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,hello_desc2_front.core.state))], null)], null),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,hello_desc2_front.core.state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (x){
return cljs.core.swap_BANG_.call(null,hello_desc2_front.core.state,(function (p1__28333_SHARP_){
return cljs.core.assoc.call(null,p1__28333_SHARP_,new cljs.core.Keyword(null,"message","message",-406056002),x.target.value);
}));
})], null),cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),x], null);
}),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["yellow","aquamarine","red","blue","palegoldenrod","aliceblue"], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"with hahaha!"], null)], null);
});
hello_desc2_front.core.mount_root = (function hello_desc2_front$core$mount_root(setting){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_desc2_front.core.root_component], null),document.getElementById("app"));
});
hello_desc2_front.core.init_BANG_ = (function hello_desc2_front$core$init_BANG_(setting){
return hello_desc2_front.core.mount_root.call(null,setting);
});

//# sourceMappingURL=core.js.map