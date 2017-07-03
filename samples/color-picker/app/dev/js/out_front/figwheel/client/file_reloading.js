// Compiled by ClojureScript 1.9.473 {:elide-asserts true}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__6814__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__6814__auto__){
return or__6814__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__6814__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__6814__auto__)){
return or__6814__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__14686_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__14686_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__14691 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__14692 = null;
var count__14693 = (0);
var i__14694 = (0);
while(true){
if((i__14694 < count__14693)){
var n = cljs.core._nth.call(null,chunk__14692,i__14694);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__14695 = seq__14691;
var G__14696 = chunk__14692;
var G__14697 = count__14693;
var G__14698 = (i__14694 + (1));
seq__14691 = G__14695;
chunk__14692 = G__14696;
count__14693 = G__14697;
i__14694 = G__14698;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__14691);
if(temp__4657__auto__){
var seq__14691__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14691__$1)){
var c__7633__auto__ = cljs.core.chunk_first.call(null,seq__14691__$1);
var G__14699 = cljs.core.chunk_rest.call(null,seq__14691__$1);
var G__14700 = c__7633__auto__;
var G__14701 = cljs.core.count.call(null,c__7633__auto__);
var G__14702 = (0);
seq__14691 = G__14699;
chunk__14692 = G__14700;
count__14693 = G__14701;
i__14694 = G__14702;
continue;
} else {
var n = cljs.core.first.call(null,seq__14691__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__14703 = cljs.core.next.call(null,seq__14691__$1);
var G__14704 = null;
var G__14705 = (0);
var G__14706 = (0);
seq__14691 = G__14703;
chunk__14692 = G__14704;
count__14693 = G__14705;
i__14694 = G__14706;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__14757_14768 = cljs.core.seq.call(null,deps);
var chunk__14758_14769 = null;
var count__14759_14770 = (0);
var i__14760_14771 = (0);
while(true){
if((i__14760_14771 < count__14759_14770)){
var dep_14772 = cljs.core._nth.call(null,chunk__14758_14769,i__14760_14771);
topo_sort_helper_STAR_.call(null,dep_14772,(depth + (1)),state);

var G__14773 = seq__14757_14768;
var G__14774 = chunk__14758_14769;
var G__14775 = count__14759_14770;
var G__14776 = (i__14760_14771 + (1));
seq__14757_14768 = G__14773;
chunk__14758_14769 = G__14774;
count__14759_14770 = G__14775;
i__14760_14771 = G__14776;
continue;
} else {
var temp__4657__auto___14777 = cljs.core.seq.call(null,seq__14757_14768);
if(temp__4657__auto___14777){
var seq__14757_14778__$1 = temp__4657__auto___14777;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14757_14778__$1)){
var c__7633__auto___14779 = cljs.core.chunk_first.call(null,seq__14757_14778__$1);
var G__14780 = cljs.core.chunk_rest.call(null,seq__14757_14778__$1);
var G__14781 = c__7633__auto___14779;
var G__14782 = cljs.core.count.call(null,c__7633__auto___14779);
var G__14783 = (0);
seq__14757_14768 = G__14780;
chunk__14758_14769 = G__14781;
count__14759_14770 = G__14782;
i__14760_14771 = G__14783;
continue;
} else {
var dep_14784 = cljs.core.first.call(null,seq__14757_14778__$1);
topo_sort_helper_STAR_.call(null,dep_14784,(depth + (1)),state);

var G__14785 = cljs.core.next.call(null,seq__14757_14778__$1);
var G__14786 = null;
var G__14787 = (0);
var G__14788 = (0);
seq__14757_14768 = G__14785;
chunk__14758_14769 = G__14786;
count__14759_14770 = G__14787;
i__14760_14771 = G__14788;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__14761){
var vec__14765 = p__14761;
var seq__14766 = cljs.core.seq.call(null,vec__14765);
var first__14767 = cljs.core.first.call(null,seq__14766);
var seq__14766__$1 = cljs.core.next.call(null,seq__14766);
var x = first__14767;
var xs = seq__14766__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__14765,seq__14766,first__14767,seq__14766__$1,x,xs,get_deps__$1){
return (function (p1__14707_SHARP_){
return clojure.set.difference.call(null,p1__14707_SHARP_,x);
});})(vec__14765,seq__14766,first__14767,seq__14766__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__14801 = cljs.core.seq.call(null,provides);
var chunk__14802 = null;
var count__14803 = (0);
var i__14804 = (0);
while(true){
if((i__14804 < count__14803)){
var prov = cljs.core._nth.call(null,chunk__14802,i__14804);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__14805_14813 = cljs.core.seq.call(null,requires);
var chunk__14806_14814 = null;
var count__14807_14815 = (0);
var i__14808_14816 = (0);
while(true){
if((i__14808_14816 < count__14807_14815)){
var req_14817 = cljs.core._nth.call(null,chunk__14806_14814,i__14808_14816);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_14817,prov);

var G__14818 = seq__14805_14813;
var G__14819 = chunk__14806_14814;
var G__14820 = count__14807_14815;
var G__14821 = (i__14808_14816 + (1));
seq__14805_14813 = G__14818;
chunk__14806_14814 = G__14819;
count__14807_14815 = G__14820;
i__14808_14816 = G__14821;
continue;
} else {
var temp__4657__auto___14822 = cljs.core.seq.call(null,seq__14805_14813);
if(temp__4657__auto___14822){
var seq__14805_14823__$1 = temp__4657__auto___14822;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14805_14823__$1)){
var c__7633__auto___14824 = cljs.core.chunk_first.call(null,seq__14805_14823__$1);
var G__14825 = cljs.core.chunk_rest.call(null,seq__14805_14823__$1);
var G__14826 = c__7633__auto___14824;
var G__14827 = cljs.core.count.call(null,c__7633__auto___14824);
var G__14828 = (0);
seq__14805_14813 = G__14825;
chunk__14806_14814 = G__14826;
count__14807_14815 = G__14827;
i__14808_14816 = G__14828;
continue;
} else {
var req_14829 = cljs.core.first.call(null,seq__14805_14823__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_14829,prov);

var G__14830 = cljs.core.next.call(null,seq__14805_14823__$1);
var G__14831 = null;
var G__14832 = (0);
var G__14833 = (0);
seq__14805_14813 = G__14830;
chunk__14806_14814 = G__14831;
count__14807_14815 = G__14832;
i__14808_14816 = G__14833;
continue;
}
} else {
}
}
break;
}

var G__14834 = seq__14801;
var G__14835 = chunk__14802;
var G__14836 = count__14803;
var G__14837 = (i__14804 + (1));
seq__14801 = G__14834;
chunk__14802 = G__14835;
count__14803 = G__14836;
i__14804 = G__14837;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__14801);
if(temp__4657__auto__){
var seq__14801__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14801__$1)){
var c__7633__auto__ = cljs.core.chunk_first.call(null,seq__14801__$1);
var G__14838 = cljs.core.chunk_rest.call(null,seq__14801__$1);
var G__14839 = c__7633__auto__;
var G__14840 = cljs.core.count.call(null,c__7633__auto__);
var G__14841 = (0);
seq__14801 = G__14838;
chunk__14802 = G__14839;
count__14803 = G__14840;
i__14804 = G__14841;
continue;
} else {
var prov = cljs.core.first.call(null,seq__14801__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__14809_14842 = cljs.core.seq.call(null,requires);
var chunk__14810_14843 = null;
var count__14811_14844 = (0);
var i__14812_14845 = (0);
while(true){
if((i__14812_14845 < count__14811_14844)){
var req_14846 = cljs.core._nth.call(null,chunk__14810_14843,i__14812_14845);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_14846,prov);

var G__14847 = seq__14809_14842;
var G__14848 = chunk__14810_14843;
var G__14849 = count__14811_14844;
var G__14850 = (i__14812_14845 + (1));
seq__14809_14842 = G__14847;
chunk__14810_14843 = G__14848;
count__14811_14844 = G__14849;
i__14812_14845 = G__14850;
continue;
} else {
var temp__4657__auto___14851__$1 = cljs.core.seq.call(null,seq__14809_14842);
if(temp__4657__auto___14851__$1){
var seq__14809_14852__$1 = temp__4657__auto___14851__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14809_14852__$1)){
var c__7633__auto___14853 = cljs.core.chunk_first.call(null,seq__14809_14852__$1);
var G__14854 = cljs.core.chunk_rest.call(null,seq__14809_14852__$1);
var G__14855 = c__7633__auto___14853;
var G__14856 = cljs.core.count.call(null,c__7633__auto___14853);
var G__14857 = (0);
seq__14809_14842 = G__14854;
chunk__14810_14843 = G__14855;
count__14811_14844 = G__14856;
i__14812_14845 = G__14857;
continue;
} else {
var req_14858 = cljs.core.first.call(null,seq__14809_14852__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_14858,prov);

var G__14859 = cljs.core.next.call(null,seq__14809_14852__$1);
var G__14860 = null;
var G__14861 = (0);
var G__14862 = (0);
seq__14809_14842 = G__14859;
chunk__14810_14843 = G__14860;
count__14811_14844 = G__14861;
i__14812_14845 = G__14862;
continue;
}
} else {
}
}
break;
}

var G__14863 = cljs.core.next.call(null,seq__14801__$1);
var G__14864 = null;
var G__14865 = (0);
var G__14866 = (0);
seq__14801 = G__14863;
chunk__14802 = G__14864;
count__14803 = G__14865;
i__14804 = G__14866;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__14871_14875 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__14872_14876 = null;
var count__14873_14877 = (0);
var i__14874_14878 = (0);
while(true){
if((i__14874_14878 < count__14873_14877)){
var ns_14879 = cljs.core._nth.call(null,chunk__14872_14876,i__14874_14878);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_14879);

var G__14880 = seq__14871_14875;
var G__14881 = chunk__14872_14876;
var G__14882 = count__14873_14877;
var G__14883 = (i__14874_14878 + (1));
seq__14871_14875 = G__14880;
chunk__14872_14876 = G__14881;
count__14873_14877 = G__14882;
i__14874_14878 = G__14883;
continue;
} else {
var temp__4657__auto___14884 = cljs.core.seq.call(null,seq__14871_14875);
if(temp__4657__auto___14884){
var seq__14871_14885__$1 = temp__4657__auto___14884;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14871_14885__$1)){
var c__7633__auto___14886 = cljs.core.chunk_first.call(null,seq__14871_14885__$1);
var G__14887 = cljs.core.chunk_rest.call(null,seq__14871_14885__$1);
var G__14888 = c__7633__auto___14886;
var G__14889 = cljs.core.count.call(null,c__7633__auto___14886);
var G__14890 = (0);
seq__14871_14875 = G__14887;
chunk__14872_14876 = G__14888;
count__14873_14877 = G__14889;
i__14874_14878 = G__14890;
continue;
} else {
var ns_14891 = cljs.core.first.call(null,seq__14871_14885__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_14891);

var G__14892 = cljs.core.next.call(null,seq__14871_14885__$1);
var G__14893 = null;
var G__14894 = (0);
var G__14895 = (0);
seq__14871_14875 = G__14892;
chunk__14872_14876 = G__14893;
count__14873_14877 = G__14894;
i__14874_14878 = G__14895;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__6814__auto__ = goog.require__;
if(cljs.core.truth_(or__6814__auto__)){
return or__6814__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__14896__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__14896 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14897__i = 0, G__14897__a = new Array(arguments.length -  0);
while (G__14897__i < G__14897__a.length) {G__14897__a[G__14897__i] = arguments[G__14897__i + 0]; ++G__14897__i;}
  args = new cljs.core.IndexedSeq(G__14897__a,0);
} 
return G__14896__delegate.call(this,args);};
G__14896.cljs$lang$maxFixedArity = 0;
G__14896.cljs$lang$applyTo = (function (arglist__14898){
var args = cljs.core.seq(arglist__14898);
return G__14896__delegate(args);
});
G__14896.cljs$core$IFn$_invoke$arity$variadic = G__14896__delegate;
return G__14896;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__14899 = cljs.core._EQ_;
var expr__14900 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__14899.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__14900))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__14899,expr__14900){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__14899,expr__14900))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__14899,expr__14900){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e14902){if((e14902 instanceof Error)){
var e = e14902;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e14902;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__14899,expr__14900))
} else {
if(cljs.core.truth_(pred__14899.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__14900))){
return ((function (pred__14899,expr__14900){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__14899,expr__14900){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__14899,expr__14900))
);

return deferred.addErrback(((function (deferred,pred__14899,expr__14900){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__14899,expr__14900))
);
});
;})(pred__14899,expr__14900))
} else {
if(cljs.core.truth_(pred__14899.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__14900))){
return ((function (pred__14899,expr__14900){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e14903){if((e14903 instanceof Error)){
var e = e14903;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e14903;

}
}})());
});
;})(pred__14899,expr__14900))
} else {
return ((function (pred__14899,expr__14900){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__14899,expr__14900))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__14904,callback){
var map__14907 = p__14904;
var map__14907__$1 = ((((!((map__14907 == null)))?((((map__14907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14907.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14907):map__14907);
var file_msg = map__14907__$1;
var request_url = cljs.core.get.call(null,map__14907__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__14907,map__14907__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__14907,map__14907__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__10044__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10044__auto__){
return (function (){
var f__10045__auto__ = (function (){var switch__9932__auto__ = ((function (c__10044__auto__){
return (function (state_14931){
var state_val_14932 = (state_14931[(1)]);
if((state_val_14932 === (7))){
var inst_14927 = (state_14931[(2)]);
var state_14931__$1 = state_14931;
var statearr_14933_14953 = state_14931__$1;
(statearr_14933_14953[(2)] = inst_14927);

(statearr_14933_14953[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (1))){
var state_14931__$1 = state_14931;
var statearr_14934_14954 = state_14931__$1;
(statearr_14934_14954[(2)] = null);

(statearr_14934_14954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (4))){
var inst_14911 = (state_14931[(7)]);
var inst_14911__$1 = (state_14931[(2)]);
var state_14931__$1 = (function (){var statearr_14935 = state_14931;
(statearr_14935[(7)] = inst_14911__$1);

return statearr_14935;
})();
if(cljs.core.truth_(inst_14911__$1)){
var statearr_14936_14955 = state_14931__$1;
(statearr_14936_14955[(1)] = (5));

} else {
var statearr_14937_14956 = state_14931__$1;
(statearr_14937_14956[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (6))){
var state_14931__$1 = state_14931;
var statearr_14938_14957 = state_14931__$1;
(statearr_14938_14957[(2)] = null);

(statearr_14938_14957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (3))){
var inst_14929 = (state_14931[(2)]);
var state_14931__$1 = state_14931;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14931__$1,inst_14929);
} else {
if((state_val_14932 === (2))){
var state_14931__$1 = state_14931;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14931__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_14932 === (11))){
var inst_14923 = (state_14931[(2)]);
var state_14931__$1 = (function (){var statearr_14939 = state_14931;
(statearr_14939[(8)] = inst_14923);

return statearr_14939;
})();
var statearr_14940_14958 = state_14931__$1;
(statearr_14940_14958[(2)] = null);

(statearr_14940_14958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (9))){
var inst_14917 = (state_14931[(9)]);
var inst_14915 = (state_14931[(10)]);
var inst_14919 = inst_14917.call(null,inst_14915);
var state_14931__$1 = state_14931;
var statearr_14941_14959 = state_14931__$1;
(statearr_14941_14959[(2)] = inst_14919);

(statearr_14941_14959[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (5))){
var inst_14911 = (state_14931[(7)]);
var inst_14913 = figwheel.client.file_reloading.blocking_load.call(null,inst_14911);
var state_14931__$1 = state_14931;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14931__$1,(8),inst_14913);
} else {
if((state_val_14932 === (10))){
var inst_14915 = (state_14931[(10)]);
var inst_14921 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_14915);
var state_14931__$1 = state_14931;
var statearr_14942_14960 = state_14931__$1;
(statearr_14942_14960[(2)] = inst_14921);

(statearr_14942_14960[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (8))){
var inst_14917 = (state_14931[(9)]);
var inst_14911 = (state_14931[(7)]);
var inst_14915 = (state_14931[(2)]);
var inst_14916 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_14917__$1 = cljs.core.get.call(null,inst_14916,inst_14911);
var state_14931__$1 = (function (){var statearr_14943 = state_14931;
(statearr_14943[(9)] = inst_14917__$1);

(statearr_14943[(10)] = inst_14915);

return statearr_14943;
})();
if(cljs.core.truth_(inst_14917__$1)){
var statearr_14944_14961 = state_14931__$1;
(statearr_14944_14961[(1)] = (9));

} else {
var statearr_14945_14962 = state_14931__$1;
(statearr_14945_14962[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10044__auto__))
;
return ((function (switch__9932__auto__,c__10044__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__9933__auto__ = null;
var figwheel$client$file_reloading$state_machine__9933__auto____0 = (function (){
var statearr_14949 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14949[(0)] = figwheel$client$file_reloading$state_machine__9933__auto__);

(statearr_14949[(1)] = (1));

return statearr_14949;
});
var figwheel$client$file_reloading$state_machine__9933__auto____1 = (function (state_14931){
while(true){
var ret_value__9934__auto__ = (function (){try{while(true){
var result__9935__auto__ = switch__9932__auto__.call(null,state_14931);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9935__auto__;
}
break;
}
}catch (e14950){if((e14950 instanceof Object)){
var ex__9936__auto__ = e14950;
var statearr_14951_14963 = state_14931;
(statearr_14951_14963[(5)] = ex__9936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14931);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14950;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14964 = state_14931;
state_14931 = G__14964;
continue;
} else {
return ret_value__9934__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__9933__auto__ = function(state_14931){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__9933__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__9933__auto____1.call(this,state_14931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__9933__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__9933__auto____0;
figwheel$client$file_reloading$state_machine__9933__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__9933__auto____1;
return figwheel$client$file_reloading$state_machine__9933__auto__;
})()
;})(switch__9932__auto__,c__10044__auto__))
})();
var state__10046__auto__ = (function (){var statearr_14952 = f__10045__auto__.call(null);
(statearr_14952[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10044__auto__);

return statearr_14952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10046__auto__);
});})(c__10044__auto__))
);

return c__10044__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__14965,callback){
var map__14968 = p__14965;
var map__14968__$1 = ((((!((map__14968 == null)))?((((map__14968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14968.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14968):map__14968);
var file_msg = map__14968__$1;
var namespace = cljs.core.get.call(null,map__14968__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__14968,map__14968__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__14968,map__14968__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__14970){
var map__14973 = p__14970;
var map__14973__$1 = ((((!((map__14973 == null)))?((((map__14973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14973.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14973):map__14973);
var file_msg = map__14973__$1;
var namespace = cljs.core.get.call(null,map__14973__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__14975){
var map__14978 = p__14975;
var map__14978__$1 = ((((!((map__14978 == null)))?((((map__14978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14978.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14978):map__14978);
var file_msg = map__14978__$1;
var namespace = cljs.core.get.call(null,map__14978__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__6802__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__6802__auto__){
var or__6814__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__6814__auto__)){
return or__6814__auto__;
} else {
var or__6814__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__6814__auto____$1)){
return or__6814__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__6802__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__14980,callback){
var map__14983 = p__14980;
var map__14983__$1 = ((((!((map__14983 == null)))?((((map__14983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14983.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14983):map__14983);
var file_msg = map__14983__$1;
var request_url = cljs.core.get.call(null,map__14983__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__14983__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not trying to load file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__10044__auto___15087 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10044__auto___15087,out){
return (function (){
var f__10045__auto__ = (function (){var switch__9932__auto__ = ((function (c__10044__auto___15087,out){
return (function (state_15069){
var state_val_15070 = (state_15069[(1)]);
if((state_val_15070 === (1))){
var inst_15043 = cljs.core.seq.call(null,files);
var inst_15044 = cljs.core.first.call(null,inst_15043);
var inst_15045 = cljs.core.next.call(null,inst_15043);
var inst_15046 = files;
var state_15069__$1 = (function (){var statearr_15071 = state_15069;
(statearr_15071[(7)] = inst_15046);

(statearr_15071[(8)] = inst_15045);

(statearr_15071[(9)] = inst_15044);

return statearr_15071;
})();
var statearr_15072_15088 = state_15069__$1;
(statearr_15072_15088[(2)] = null);

(statearr_15072_15088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15070 === (2))){
var inst_15046 = (state_15069[(7)]);
var inst_15052 = (state_15069[(10)]);
var inst_15051 = cljs.core.seq.call(null,inst_15046);
var inst_15052__$1 = cljs.core.first.call(null,inst_15051);
var inst_15053 = cljs.core.next.call(null,inst_15051);
var inst_15054 = (inst_15052__$1 == null);
var inst_15055 = cljs.core.not.call(null,inst_15054);
var state_15069__$1 = (function (){var statearr_15073 = state_15069;
(statearr_15073[(11)] = inst_15053);

(statearr_15073[(10)] = inst_15052__$1);

return statearr_15073;
})();
if(inst_15055){
var statearr_15074_15089 = state_15069__$1;
(statearr_15074_15089[(1)] = (4));

} else {
var statearr_15075_15090 = state_15069__$1;
(statearr_15075_15090[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15070 === (3))){
var inst_15067 = (state_15069[(2)]);
var state_15069__$1 = state_15069;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15069__$1,inst_15067);
} else {
if((state_val_15070 === (4))){
var inst_15052 = (state_15069[(10)]);
var inst_15057 = figwheel.client.file_reloading.reload_js_file.call(null,inst_15052);
var state_15069__$1 = state_15069;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15069__$1,(7),inst_15057);
} else {
if((state_val_15070 === (5))){
var inst_15063 = cljs.core.async.close_BANG_.call(null,out);
var state_15069__$1 = state_15069;
var statearr_15076_15091 = state_15069__$1;
(statearr_15076_15091[(2)] = inst_15063);

(statearr_15076_15091[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15070 === (6))){
var inst_15065 = (state_15069[(2)]);
var state_15069__$1 = state_15069;
var statearr_15077_15092 = state_15069__$1;
(statearr_15077_15092[(2)] = inst_15065);

(statearr_15077_15092[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15070 === (7))){
var inst_15053 = (state_15069[(11)]);
var inst_15059 = (state_15069[(2)]);
var inst_15060 = cljs.core.async.put_BANG_.call(null,out,inst_15059);
var inst_15046 = inst_15053;
var state_15069__$1 = (function (){var statearr_15078 = state_15069;
(statearr_15078[(7)] = inst_15046);

(statearr_15078[(12)] = inst_15060);

return statearr_15078;
})();
var statearr_15079_15093 = state_15069__$1;
(statearr_15079_15093[(2)] = null);

(statearr_15079_15093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__10044__auto___15087,out))
;
return ((function (switch__9932__auto__,c__10044__auto___15087,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__9933__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__9933__auto____0 = (function (){
var statearr_15083 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15083[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__9933__auto__);

(statearr_15083[(1)] = (1));

return statearr_15083;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__9933__auto____1 = (function (state_15069){
while(true){
var ret_value__9934__auto__ = (function (){try{while(true){
var result__9935__auto__ = switch__9932__auto__.call(null,state_15069);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9935__auto__;
}
break;
}
}catch (e15084){if((e15084 instanceof Object)){
var ex__9936__auto__ = e15084;
var statearr_15085_15094 = state_15069;
(statearr_15085_15094[(5)] = ex__9936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15084;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15095 = state_15069;
state_15069 = G__15095;
continue;
} else {
return ret_value__9934__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__9933__auto__ = function(state_15069){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__9933__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__9933__auto____1.call(this,state_15069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__9933__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__9933__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__9933__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__9933__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__9933__auto__;
})()
;})(switch__9932__auto__,c__10044__auto___15087,out))
})();
var state__10046__auto__ = (function (){var statearr_15086 = f__10045__auto__.call(null);
(statearr_15086[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10044__auto___15087);

return statearr_15086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10046__auto__);
});})(c__10044__auto___15087,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__15096,opts){
var map__15100 = p__15096;
var map__15100__$1 = ((((!((map__15100 == null)))?((((map__15100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15100.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15100):map__15100);
var eval_body = cljs.core.get.call(null,map__15100__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__15100__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__6802__auto__ = eval_body;
if(cljs.core.truth_(and__6802__auto__)){
return typeof eval_body === 'string';
} else {
return and__6802__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e15102){var e = e15102;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to evaluate "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__15103_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__15103_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__15112){
var vec__15113 = p__15112;
var k = cljs.core.nth.call(null,vec__15113,(0),null);
var v = cljs.core.nth.call(null,vec__15113,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__15116){
var vec__15117 = p__15116;
var k = cljs.core.nth.call(null,vec__15117,(0),null);
var v = cljs.core.nth.call(null,vec__15117,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__15123,p__15124){
var map__15372 = p__15123;
var map__15372__$1 = ((((!((map__15372 == null)))?((((map__15372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15372.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15372):map__15372);
var opts = map__15372__$1;
var before_jsload = cljs.core.get.call(null,map__15372__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__15372__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__15372__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__15373 = p__15124;
var map__15373__$1 = ((((!((map__15373 == null)))?((((map__15373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15373.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15373):map__15373);
var msg = map__15373__$1;
var files = cljs.core.get.call(null,map__15373__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__15373__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__15373__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__10044__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10044__auto__,map__15372,map__15372__$1,opts,before_jsload,on_jsload,reload_dependents,map__15373,map__15373__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__10045__auto__ = (function (){var switch__9932__auto__ = ((function (c__10044__auto__,map__15372,map__15372__$1,opts,before_jsload,on_jsload,reload_dependents,map__15373,map__15373__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_15527){
var state_val_15528 = (state_15527[(1)]);
if((state_val_15528 === (7))){
var inst_15388 = (state_15527[(7)]);
var inst_15389 = (state_15527[(8)]);
var inst_15387 = (state_15527[(9)]);
var inst_15390 = (state_15527[(10)]);
var inst_15395 = cljs.core._nth.call(null,inst_15388,inst_15390);
var inst_15396 = figwheel.client.file_reloading.eval_body.call(null,inst_15395,opts);
var inst_15397 = (inst_15390 + (1));
var tmp15529 = inst_15388;
var tmp15530 = inst_15389;
var tmp15531 = inst_15387;
var inst_15387__$1 = tmp15531;
var inst_15388__$1 = tmp15529;
var inst_15389__$1 = tmp15530;
var inst_15390__$1 = inst_15397;
var state_15527__$1 = (function (){var statearr_15532 = state_15527;
(statearr_15532[(11)] = inst_15396);

(statearr_15532[(7)] = inst_15388__$1);

(statearr_15532[(8)] = inst_15389__$1);

(statearr_15532[(9)] = inst_15387__$1);

(statearr_15532[(10)] = inst_15390__$1);

return statearr_15532;
})();
var statearr_15533_15619 = state_15527__$1;
(statearr_15533_15619[(2)] = null);

(statearr_15533_15619[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15528 === (20))){
var inst_15430 = (state_15527[(12)]);
var inst_15438 = figwheel.client.file_reloading.sort_files.call(null,inst_15430);
var state_15527__$1 = state_15527;
var statearr_15534_15620 = state_15527__$1;
(statearr_15534_15620[(2)] = inst_15438);

(statearr_15534_15620[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15528 === (27))){
var state_15527__$1 = state_15527;
var statearr_15535_15621 = state_15527__$1;
(statearr_15535_15621[(2)] = null);

(statearr_15535_15621[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15528 === (1))){
var inst_15379 = (state_15527[(13)]);
var inst_15376 = before_jsload.call(null,files);
var inst_15377 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_15378 = (function (){return ((function (inst_15379,inst_15376,inst_15377,state_val_15528,c__10044__auto__,map__15372,map__15372__$1,opts,before_jsload,on_jsload,reload_dependents,map__15373,map__15373__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__15120_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__15120_SHARP_);
});
;})(inst_15379,inst_15376,inst_15377,state_val_15528,c__10044__auto__,map__15372,map__15372__$1,opts,before_jsload,on_jsload,reload_dependents,map__15373,map__15373__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_15379__$1 = cljs.core.filter.call(null,inst_15378,files);
var inst_15380 = cljs.core.not_empty.call(null,inst_15379__$1);
var state_15527__$1 = (function (){var statearr_15536 = state_15527;
(statearr_15536[(13)] = inst_15379__$1);

(statearr_15536[(14)] = inst_15377);

(statearr_15536[(15)] = inst_15376);

return statearr_15536;
})();
if(cljs.core.truth_(inst_15380)){
var statearr_15537_15622 = state_15527__$1;
(statearr_15537_15622[(1)] = (2));

} else {
var statearr_15538_15623 = state_15527__$1;
(statearr_15538_15623[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15528 === (24))){
var state_15527__$1 = state_15527;
var statearr_15539_15624 = state_15527__$1;
(statearr_15539_15624[(2)] = null);

(statearr_15539_15624[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15528 === (39))){
var inst_15480 = (state_15527[(16)]);
var state_15527__$1 = state_15527;
var statearr_15540_15625 = state_15527__$1;
(statearr_15540_15625[(2)] = inst_15480);

(statearr_15540_15625[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15528 === (46))){
var inst_15522 = (state_15527[(2)]);
var state_15527__$1 = state_15527;
var statearr_15541_15626 = state_15527__$1;
(statearr_15541_15626[(2)] = inst_15522);

(statearr_15541_15626[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15528 === (4))){
var inst_15424 = (state_15527[(2)]);
var inst_15425 = cljs.core.List.EMPTY;
var inst_15426 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_15425);
var inst_15427 = (function (){return ((function (inst_15424,inst_15425,inst_15426,state_val_15528,c__10044__auto__,map__15372,map__15372__$1,opts,before_jsload,on_jsload,reload_dependents,map__15373,map__15373__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__15121_SHARP_){
var and__6802__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__15121_SHARP_);
if(cljs.core.truth_(and__6802__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__15121_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__15121_SHARP_)));
} else {
return and__6802__auto__;
}
});
;})(inst_15424,inst_15425,inst_15426,state_val_15528,c__10044__auto__,map__15372,map__15372__$1,opts,before_jsload,on_jsload,reload_dependents,map__15373,map__15373__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_15428 = cljs.core.filter.call(null,inst_15427,files);
var inst_15429 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_15430 = cljs.core.concat.call(null,inst_15428,inst_15429);
var state_15527__$1 = (function (){var statearr_15542 = state_15527;
(statearr_15542[(12)] = inst_15430);

(statearr_15542[(17)] = inst_15426);

(statearr_15542[(18)] = inst_15424);

return statearr_15542;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_15543_15627 = state_15527__$1;
(statearr_15543_15627[(1)] = (16));

} else {
var statearr_15544_15628 = state_15527__$1;
(statearr_15544_15628[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15528 === (15))){
var inst_15414 = (state_15527[(2)]);
var state_15527__$1 = state_15527;
var statearr_15545_15629 = state_15527__$1;
(statearr_15545_15629[(2)] = inst_15414);

(statearr_15545_15629[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15528 === (21))){
var inst_15440 = (state_15527[(19)]);
var inst_15440__$1 = (state_15527[(2)]);
var inst_15441 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_15440__$1);
var state_15527__$1 = (function (){var statearr_15546 = state_15527;
(statearr_15546[(19)] = inst_15440__$1);

return statearr_15546;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15527__$1,(22),inst_15441);
} else {
if((state_val_15528 === (31))){
var inst_15525 = (state_15527[(2)]);
var state_15527__$1 = state_15527;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15527__$1,inst_15525);
} else {
if((state_val_15528 === (32))){
var inst_15480 = (state_15527[(16)]);
var inst_15485 = inst_15480.cljs$lang$protocol_mask$partition0$;
var inst_15486 = (inst_15485 & (64));
var inst_15487 = inst_15480.cljs$core$ISeq$;
var inst_15488 = (cljs.core.PROTOCOL_SENTINEL === inst_15487);
var inst_15489 = (inst_15486) || (inst_15488);
var state_15527__$1 = state_15527;
if(cljs.core.truth_(inst_15489)){
var statearr_15547_15630 = state_15527__$1;
(statearr_15547_15630[(1)] = (35));

} else {
var statearr_15548_15631 = state_15527__$1;
(statearr_15548_15631[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15528 === (40))){
var inst_15502 = (state_15527[(20)]);
var inst_15501 = (state_15527[(2)]);
var inst_15502__$1 = cljs.core.get.call(null,inst_15501,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_15503 = cljs.core.get.call(null,inst_15501,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_15504 = cljs.core.not_empty.call(null,inst_15502__$1);
var state_15527__$1 = (function (){var statearr_15549 = state_15527;
(statearr_15549[(21)] = inst_15503);

(statearr_15549[(20)] = inst_15502__$1);

return statearr_15549;
})();
if(cljs.core.truth_(inst_15504)){
var statearr_15550_15632 = state_15527__$1;
(statearr_15550_15632[(1)] = (41));

} else {
var statearr_15551_15633 = state_15527__$1;
(statearr_15551_15633[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15528 === (33))){
var state_15527__$1 = state_15527;
var statearr_15552_15634 = state_15527__$1;
(statearr_15552_15634[(2)] = false);

(statearr_15552_15634[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15528 === (13))){
var inst_15400 = (state_15527[(22)]);
var inst_15404 = cljs.core.chunk_first.call(null,inst_15400);
var inst_15405 = cljs.core.chunk_rest.call(null,inst_15400);
var inst_15406 = cljs.core.count.call(null,inst_15404);
var inst_15387 = inst_15405;
var inst_15388 = inst_15404;
var inst_15389 = inst_15406;
var inst_15390 = (0);
var state_15527__$1 = (function (){var statearr_15553 = state_15527;
(statearr_15553[(7)] = inst_15388);

(statearr_15553[(8)] = inst_15389);

(statearr_15553[(9)] = inst_15387);

(statearr_15553[(10)] = inst_15390);

return statearr_15553;
})();
var statearr_15554_15635 = state_15527__$1;
(statearr_15554_15635[(2)] = null);

(statearr_15554_15635[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15528 === (22))){
var inst_15444 = (state_15527[(23)]);
var inst_15448 = (state_15527[(24)]);
var inst_15440 = (state_15527[(19)]);
var inst_15443 = (state_15527[(25)]);
var inst_15443__$1 = (state_15527[(2)]);
var inst_15444__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_15443__$1);
var inst_15445 = (function (){var all_files = inst_15440;
var res_SINGLEQUOTE_ = inst_15443__$1;
var res = inst_15444__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_15444,inst_15448,inst_15440,inst_15443,inst_15443__$1,inst_15444__$1,state_val_15528,c__10044__auto__,map__15372,map__15372__$1,opts,before_jsload,on_jsload,reload_dependents,map__15373,map__15373__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__15122_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__15122_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_15444,inst_15448,inst_15440,inst_15443,inst_15443__$1,inst_15444__$1,state_val_15528,c__10044__auto__,map__15372,map__15372__$1,opts,before_jsload,on_jsload,reload_dependents,map__15373,map__15373__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_15446 = cljs.core.filter.call(null,inst_15445,inst_15443__$1);
var inst_15447 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_15448__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_15447);
var inst_15449 = cljs.core.not_empty.call(null,inst_15448__$1);
var state_15527__$1 = (function (){var statearr_15555 = state_15527;
(statearr_15555[(23)] = inst_15444__$1);

(statearr_15555[(26)] = inst_15446);

(statearr_15555[(24)] = inst_15448__$1);

(statearr_15555[(25)] = inst_15443__$1);

return statearr_15555;
})();
if(cljs.core.truth_(inst_15449)){
var statearr_15556_15636 = state_15527__$1;
(statearr_15556_15636[(1)] = (23));

} else {
var statearr_15557_15637 = state_15527__$1;
(statearr_15557_15637[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15528 === (36))){
var state_15527__$1 = state_15527;
var statearr_15558_15638 = state_15527__$1;
(statearr_15558_15638[(2)] = false);

(statearr_15558_15638[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15528 === (41))){
var inst_15502 = (state_15527[(20)]);
var inst_15506 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_15507 = cljs.core.map.call(null,inst_15506,inst_15502);
var inst_15508 = cljs.core.pr_str.call(null,inst_15507);
var inst_15509 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_15508)].join('');
var inst_15510 = figwheel.client.utils.log.call(null,inst_15509);
var state_15527__$1 = state_15527;
var statearr_15559_15639 = state_15527__$1;
(statearr_15559_15639[(2)] = inst_15510);

(statearr_15559_15639[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15528 === (43))){
var inst_15503 = (state_15527[(21)]);
var inst_15513 = (state_15527[(2)]);
var inst_15514 = cljs.core.not_empty.call(null,inst_15503);
var state_15527__$1 = (function (){var statearr_15560 = state_15527;
(statearr_15560[(27)] = inst_15513);

return statearr_15560;
})();
if(cljs.core.truth_(inst_15514)){
var statearr_15561_15640 = state_15527__$1;
(statearr_15561_15640[(1)] = (44));

} else {
var statearr_15562_15641 = state_15527__$1;
(statearr_15562_15641[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15528 === (29))){
var inst_15444 = (state_15527[(23)]);
var inst_15446 = (state_15527[(26)]);
var inst_15448 = (state_15527[(24)]);
var inst_15480 = (state_15527[(16)]);
var inst_15440 = (state_15527[(19)]);
var inst_15443 = (state_15527[(25)]);
var inst_15476 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_15479 = (function (){var all_files = inst_15440;
var res_SINGLEQUOTE_ = inst_15443;
var res = inst_15444;
var files_not_loaded = inst_15446;
var dependencies_that_loaded = inst_15448;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_15444,inst_15446,inst_15448,inst_15480,inst_15440,inst_15443,inst_15476,state_val_15528,c__10044__auto__,map__15372,map__15372__$1,opts,before_jsload,on_jsload,reload_dependents,map__15373,map__15373__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__15478){
var map__15563 = p__15478;
var map__15563__$1 = ((((!((map__15563 == null)))?((((map__15563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15563.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15563):map__15563);
var namespace = cljs.core.get.call(null,map__15563__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_15444,inst_15446,inst_15448,inst_15480,inst_15440,inst_15443,inst_15476,state_val_15528,c__10044__auto__,map__15372,map__15372__$1,opts,before_jsload,on_jsload,reload_dependents,map__15373,map__15373__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_15480__$1 = cljs.core.group_by.call(null,inst_15479,inst_15446);
var inst_15482 = (inst_15480__$1 == null);
var inst_15483 = cljs.core.not.call(null,inst_15482);
var state_15527__$1 = (function (){var statearr_15565 = state_15527;
(statearr_15565[(16)] = inst_15480__$1);

(statearr_15565[(28)] = inst_15476);

return statearr_15565;
})();
if(inst_15483){
var statearr_15566_15642 = state_15527__$1;
(statearr_15566_15642[(1)] = (32));

} else {
var statearr_15567_15643 = state_15527__$1;
(statearr_15567_15643[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15528 === (44))){
var inst_15503 = (state_15527[(21)]);
var inst_15516 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_15503);
var inst_15517 = cljs.core.pr_str.call(null,inst_15516);
var inst_15518 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_15517)].join('');
var inst_15519 = figwheel.client.utils.log.call(null,inst_15518);
var state_15527__$1 = state_15527;
var statearr_15568_15644 = state_15527__$1;
(statearr_15568_15644[(2)] = inst_15519);

(statearr_15568_15644[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15528 === (6))){
var inst_15421 = (state_15527[(2)]);
var state_15527__$1 = state_15527;
var statearr_15569_15645 = state_15527__$1;
(statearr_15569_15645[(2)] = inst_15421);

(statearr_15569_15645[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15528 === (28))){
var inst_15446 = (state_15527[(26)]);
var inst_15473 = (state_15527[(2)]);
var inst_15474 = cljs.core.not_empty.call(null,inst_15446);
var state_15527__$1 = (function (){var statearr_15570 = state_15527;
(statearr_15570[(29)] = inst_15473);

return statearr_15570;
})();
if(cljs.core.truth_(inst_15474)){
var statearr_15571_15646 = state_15527__$1;
(statearr_15571_15646[(1)] = (29));

} else {
var statearr_15572_15647 = state_15527__$1;
(statearr_15572_15647[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15528 === (25))){
var inst_15444 = (state_15527[(23)]);
var inst_15460 = (state_15527[(2)]);
var inst_15461 = cljs.core.not_empty.call(null,inst_15444);
var state_15527__$1 = (function (){var statearr_15573 = state_15527;
(statearr_15573[(30)] = inst_15460);

return statearr_15573;
})();
if(cljs.core.truth_(inst_15461)){
var statearr_15574_15648 = state_15527__$1;
(statearr_15574_15648[(1)] = (26));

} else {
var statearr_15575_15649 = state_15527__$1;
(statearr_15575_15649[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15528 === (34))){
var inst_15496 = (state_15527[(2)]);
var state_15527__$1 = state_15527;
if(cljs.core.truth_(inst_15496)){
var statearr_15576_15650 = state_15527__$1;
(statearr_15576_15650[(1)] = (38));

} else {
var statearr_15577_15651 = state_15527__$1;
(statearr_15577_15651[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15528 === (17))){
var state_15527__$1 = state_15527;
var statearr_15578_15652 = state_15527__$1;
(statearr_15578_15652[(2)] = recompile_dependents);

(statearr_15578_15652[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15528 === (3))){
var state_15527__$1 = state_15527;
var statearr_15579_15653 = state_15527__$1;
(statearr_15579_15653[(2)] = null);

(statearr_15579_15653[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15528 === (12))){
var inst_15417 = (state_15527[(2)]);
var state_15527__$1 = state_15527;
var statearr_15580_15654 = state_15527__$1;
(statearr_15580_15654[(2)] = inst_15417);

(statearr_15580_15654[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15528 === (2))){
var inst_15379 = (state_15527[(13)]);
var inst_15386 = cljs.core.seq.call(null,inst_15379);
var inst_15387 = inst_15386;
var inst_15388 = null;
var inst_15389 = (0);
var inst_15390 = (0);
var state_15527__$1 = (function (){var statearr_15581 = state_15527;
(statearr_15581[(7)] = inst_15388);

(statearr_15581[(8)] = inst_15389);

(statearr_15581[(9)] = inst_15387);

(statearr_15581[(10)] = inst_15390);

return statearr_15581;
})();
var statearr_15582_15655 = state_15527__$1;
(statearr_15582_15655[(2)] = null);

(statearr_15582_15655[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15528 === (23))){
var inst_15444 = (state_15527[(23)]);
var inst_15446 = (state_15527[(26)]);
var inst_15448 = (state_15527[(24)]);
var inst_15440 = (state_15527[(19)]);
var inst_15443 = (state_15527[(25)]);
var inst_15451 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_15453 = (function (){var all_files = inst_15440;
var res_SINGLEQUOTE_ = inst_15443;
var res = inst_15444;
var files_not_loaded = inst_15446;
var dependencies_that_loaded = inst_15448;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_15444,inst_15446,inst_15448,inst_15440,inst_15443,inst_15451,state_val_15528,c__10044__auto__,map__15372,map__15372__$1,opts,before_jsload,on_jsload,reload_dependents,map__15373,map__15373__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__15452){
var map__15583 = p__15452;
var map__15583__$1 = ((((!((map__15583 == null)))?((((map__15583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15583.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15583):map__15583);
var request_url = cljs.core.get.call(null,map__15583__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_15444,inst_15446,inst_15448,inst_15440,inst_15443,inst_15451,state_val_15528,c__10044__auto__,map__15372,map__15372__$1,opts,before_jsload,on_jsload,reload_dependents,map__15373,map__15373__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_15454 = cljs.core.reverse.call(null,inst_15448);
var inst_15455 = cljs.core.map.call(null,inst_15453,inst_15454);
var inst_15456 = cljs.core.pr_str.call(null,inst_15455);
var inst_15457 = figwheel.client.utils.log.call(null,inst_15456);
var state_15527__$1 = (function (){var statearr_15585 = state_15527;
(statearr_15585[(31)] = inst_15451);

return statearr_15585;
})();
var statearr_15586_15656 = state_15527__$1;
(statearr_15586_15656[(2)] = inst_15457);

(statearr_15586_15656[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15528 === (35))){
var state_15527__$1 = state_15527;
var statearr_15587_15657 = state_15527__$1;
(statearr_15587_15657[(2)] = true);

(statearr_15587_15657[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15528 === (19))){
var inst_15430 = (state_15527[(12)]);
var inst_15436 = figwheel.client.file_reloading.expand_files.call(null,inst_15430);
var state_15527__$1 = state_15527;
var statearr_15588_15658 = state_15527__$1;
(statearr_15588_15658[(2)] = inst_15436);

(statearr_15588_15658[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15528 === (11))){
var state_15527__$1 = state_15527;
var statearr_15589_15659 = state_15527__$1;
(statearr_15589_15659[(2)] = null);

(statearr_15589_15659[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15528 === (9))){
var inst_15419 = (state_15527[(2)]);
var state_15527__$1 = state_15527;
var statearr_15590_15660 = state_15527__$1;
(statearr_15590_15660[(2)] = inst_15419);

(statearr_15590_15660[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15528 === (5))){
var inst_15389 = (state_15527[(8)]);
var inst_15390 = (state_15527[(10)]);
var inst_15392 = (inst_15390 < inst_15389);
var inst_15393 = inst_15392;
var state_15527__$1 = state_15527;
if(cljs.core.truth_(inst_15393)){
var statearr_15591_15661 = state_15527__$1;
(statearr_15591_15661[(1)] = (7));

} else {
var statearr_15592_15662 = state_15527__$1;
(statearr_15592_15662[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15528 === (14))){
var inst_15400 = (state_15527[(22)]);
var inst_15409 = cljs.core.first.call(null,inst_15400);
var inst_15410 = figwheel.client.file_reloading.eval_body.call(null,inst_15409,opts);
var inst_15411 = cljs.core.next.call(null,inst_15400);
var inst_15387 = inst_15411;
var inst_15388 = null;
var inst_15389 = (0);
var inst_15390 = (0);
var state_15527__$1 = (function (){var statearr_15593 = state_15527;
(statearr_15593[(7)] = inst_15388);

(statearr_15593[(8)] = inst_15389);

(statearr_15593[(9)] = inst_15387);

(statearr_15593[(10)] = inst_15390);

(statearr_15593[(32)] = inst_15410);

return statearr_15593;
})();
var statearr_15594_15663 = state_15527__$1;
(statearr_15594_15663[(2)] = null);

(statearr_15594_15663[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15528 === (45))){
var state_15527__$1 = state_15527;
var statearr_15595_15664 = state_15527__$1;
(statearr_15595_15664[(2)] = null);

(statearr_15595_15664[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15528 === (26))){
var inst_15444 = (state_15527[(23)]);
var inst_15446 = (state_15527[(26)]);
var inst_15448 = (state_15527[(24)]);
var inst_15440 = (state_15527[(19)]);
var inst_15443 = (state_15527[(25)]);
var inst_15463 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_15465 = (function (){var all_files = inst_15440;
var res_SINGLEQUOTE_ = inst_15443;
var res = inst_15444;
var files_not_loaded = inst_15446;
var dependencies_that_loaded = inst_15448;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_15444,inst_15446,inst_15448,inst_15440,inst_15443,inst_15463,state_val_15528,c__10044__auto__,map__15372,map__15372__$1,opts,before_jsload,on_jsload,reload_dependents,map__15373,map__15373__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__15464){
var map__15596 = p__15464;
var map__15596__$1 = ((((!((map__15596 == null)))?((((map__15596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15596.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15596):map__15596);
var namespace = cljs.core.get.call(null,map__15596__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__15596__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_15444,inst_15446,inst_15448,inst_15440,inst_15443,inst_15463,state_val_15528,c__10044__auto__,map__15372,map__15372__$1,opts,before_jsload,on_jsload,reload_dependents,map__15373,map__15373__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_15466 = cljs.core.map.call(null,inst_15465,inst_15444);
var inst_15467 = cljs.core.pr_str.call(null,inst_15466);
var inst_15468 = figwheel.client.utils.log.call(null,inst_15467);
var inst_15469 = (function (){var all_files = inst_15440;
var res_SINGLEQUOTE_ = inst_15443;
var res = inst_15444;
var files_not_loaded = inst_15446;
var dependencies_that_loaded = inst_15448;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_15444,inst_15446,inst_15448,inst_15440,inst_15443,inst_15463,inst_15465,inst_15466,inst_15467,inst_15468,state_val_15528,c__10044__auto__,map__15372,map__15372__$1,opts,before_jsload,on_jsload,reload_dependents,map__15373,map__15373__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_15444,inst_15446,inst_15448,inst_15440,inst_15443,inst_15463,inst_15465,inst_15466,inst_15467,inst_15468,state_val_15528,c__10044__auto__,map__15372,map__15372__$1,opts,before_jsload,on_jsload,reload_dependents,map__15373,map__15373__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_15470 = setTimeout(inst_15469,(10));
var state_15527__$1 = (function (){var statearr_15598 = state_15527;
(statearr_15598[(33)] = inst_15463);

(statearr_15598[(34)] = inst_15468);

return statearr_15598;
})();
var statearr_15599_15665 = state_15527__$1;
(statearr_15599_15665[(2)] = inst_15470);

(statearr_15599_15665[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15528 === (16))){
var state_15527__$1 = state_15527;
var statearr_15600_15666 = state_15527__$1;
(statearr_15600_15666[(2)] = reload_dependents);

(statearr_15600_15666[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15528 === (38))){
var inst_15480 = (state_15527[(16)]);
var inst_15498 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15480);
var state_15527__$1 = state_15527;
var statearr_15601_15667 = state_15527__$1;
(statearr_15601_15667[(2)] = inst_15498);

(statearr_15601_15667[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15528 === (30))){
var state_15527__$1 = state_15527;
var statearr_15602_15668 = state_15527__$1;
(statearr_15602_15668[(2)] = null);

(statearr_15602_15668[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15528 === (10))){
var inst_15400 = (state_15527[(22)]);
var inst_15402 = cljs.core.chunked_seq_QMARK_.call(null,inst_15400);
var state_15527__$1 = state_15527;
if(inst_15402){
var statearr_15603_15669 = state_15527__$1;
(statearr_15603_15669[(1)] = (13));

} else {
var statearr_15604_15670 = state_15527__$1;
(statearr_15604_15670[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15528 === (18))){
var inst_15434 = (state_15527[(2)]);
var state_15527__$1 = state_15527;
if(cljs.core.truth_(inst_15434)){
var statearr_15605_15671 = state_15527__$1;
(statearr_15605_15671[(1)] = (19));

} else {
var statearr_15606_15672 = state_15527__$1;
(statearr_15606_15672[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15528 === (42))){
var state_15527__$1 = state_15527;
var statearr_15607_15673 = state_15527__$1;
(statearr_15607_15673[(2)] = null);

(statearr_15607_15673[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15528 === (37))){
var inst_15493 = (state_15527[(2)]);
var state_15527__$1 = state_15527;
var statearr_15608_15674 = state_15527__$1;
(statearr_15608_15674[(2)] = inst_15493);

(statearr_15608_15674[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15528 === (8))){
var inst_15400 = (state_15527[(22)]);
var inst_15387 = (state_15527[(9)]);
var inst_15400__$1 = cljs.core.seq.call(null,inst_15387);
var state_15527__$1 = (function (){var statearr_15609 = state_15527;
(statearr_15609[(22)] = inst_15400__$1);

return statearr_15609;
})();
if(inst_15400__$1){
var statearr_15610_15675 = state_15527__$1;
(statearr_15610_15675[(1)] = (10));

} else {
var statearr_15611_15676 = state_15527__$1;
(statearr_15611_15676[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10044__auto__,map__15372,map__15372__$1,opts,before_jsload,on_jsload,reload_dependents,map__15373,map__15373__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__9932__auto__,c__10044__auto__,map__15372,map__15372__$1,opts,before_jsload,on_jsload,reload_dependents,map__15373,map__15373__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__9933__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__9933__auto____0 = (function (){
var statearr_15615 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15615[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__9933__auto__);

(statearr_15615[(1)] = (1));

return statearr_15615;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__9933__auto____1 = (function (state_15527){
while(true){
var ret_value__9934__auto__ = (function (){try{while(true){
var result__9935__auto__ = switch__9932__auto__.call(null,state_15527);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9935__auto__;
}
break;
}
}catch (e15616){if((e15616 instanceof Object)){
var ex__9936__auto__ = e15616;
var statearr_15617_15677 = state_15527;
(statearr_15617_15677[(5)] = ex__9936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15527);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15616;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15678 = state_15527;
state_15527 = G__15678;
continue;
} else {
return ret_value__9934__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__9933__auto__ = function(state_15527){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__9933__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__9933__auto____1.call(this,state_15527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__9933__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__9933__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__9933__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__9933__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__9933__auto__;
})()
;})(switch__9932__auto__,c__10044__auto__,map__15372,map__15372__$1,opts,before_jsload,on_jsload,reload_dependents,map__15373,map__15373__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__10046__auto__ = (function (){var statearr_15618 = f__10045__auto__.call(null);
(statearr_15618[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10044__auto__);

return statearr_15618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10046__auto__);
});})(c__10044__auto__,map__15372,map__15372__$1,opts,before_jsload,on_jsload,reload_dependents,map__15373,map__15373__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__10044__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__15681,link){
var map__15684 = p__15681;
var map__15684__$1 = ((((!((map__15684 == null)))?((((map__15684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15684.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15684):map__15684);
var file = cljs.core.get.call(null,map__15684__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__15684,map__15684__$1,file){
return (function (p1__15679_SHARP_,p2__15680_SHARP_){
if(cljs.core._EQ_.call(null,p1__15679_SHARP_,p2__15680_SHARP_)){
return p1__15679_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__15684,map__15684__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__15690){
var map__15691 = p__15690;
var map__15691__$1 = ((((!((map__15691 == null)))?((((map__15691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15691.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15691):map__15691);
var match_length = cljs.core.get.call(null,map__15691__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__15691__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__15686_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__15686_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__15693_SHARP_,p2__15694_SHARP_){
return cljs.core.assoc.call(null,p1__15693_SHARP_,cljs.core.get.call(null,p2__15694_SHARP_,key),p2__15694_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_15695 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_15695);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_15695);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__15696,p__15697){
var map__15702 = p__15696;
var map__15702__$1 = ((((!((map__15702 == null)))?((((map__15702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15702.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15702):map__15702);
var on_cssload = cljs.core.get.call(null,map__15702__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__15703 = p__15697;
var map__15703__$1 = ((((!((map__15703 == null)))?((((map__15703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15703.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15703):map__15703);
var files_msg = map__15703__$1;
var files = cljs.core.get.call(null,map__15703__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map