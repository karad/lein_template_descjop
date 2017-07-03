// Compiled by ClojureScript 1.9.473 {:elide-asserts true}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__17738){
var map__17763 = p__17738;
var map__17763__$1 = ((((!((map__17763 == null)))?((((map__17763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17763.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17763):map__17763);
var m = map__17763__$1;
var n = cljs.core.get.call(null,map__17763__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__17763__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__17765_17787 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17766_17788 = null;
var count__17767_17789 = (0);
var i__17768_17790 = (0);
while(true){
if((i__17768_17790 < count__17767_17789)){
var f_17791 = cljs.core._nth.call(null,chunk__17766_17788,i__17768_17790);
cljs.core.println.call(null,"  ",f_17791);

var G__17792 = seq__17765_17787;
var G__17793 = chunk__17766_17788;
var G__17794 = count__17767_17789;
var G__17795 = (i__17768_17790 + (1));
seq__17765_17787 = G__17792;
chunk__17766_17788 = G__17793;
count__17767_17789 = G__17794;
i__17768_17790 = G__17795;
continue;
} else {
var temp__4657__auto___17796 = cljs.core.seq.call(null,seq__17765_17787);
if(temp__4657__auto___17796){
var seq__17765_17797__$1 = temp__4657__auto___17796;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17765_17797__$1)){
var c__7633__auto___17798 = cljs.core.chunk_first.call(null,seq__17765_17797__$1);
var G__17799 = cljs.core.chunk_rest.call(null,seq__17765_17797__$1);
var G__17800 = c__7633__auto___17798;
var G__17801 = cljs.core.count.call(null,c__7633__auto___17798);
var G__17802 = (0);
seq__17765_17787 = G__17799;
chunk__17766_17788 = G__17800;
count__17767_17789 = G__17801;
i__17768_17790 = G__17802;
continue;
} else {
var f_17803 = cljs.core.first.call(null,seq__17765_17797__$1);
cljs.core.println.call(null,"  ",f_17803);

var G__17804 = cljs.core.next.call(null,seq__17765_17797__$1);
var G__17805 = null;
var G__17806 = (0);
var G__17807 = (0);
seq__17765_17787 = G__17804;
chunk__17766_17788 = G__17805;
count__17767_17789 = G__17806;
i__17768_17790 = G__17807;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_17808 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__6814__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6814__auto__)){
return or__6814__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_17808);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_17808)))?cljs.core.second.call(null,arglists_17808):arglists_17808));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__17769_17809 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17770_17810 = null;
var count__17771_17811 = (0);
var i__17772_17812 = (0);
while(true){
if((i__17772_17812 < count__17771_17811)){
var vec__17773_17813 = cljs.core._nth.call(null,chunk__17770_17810,i__17772_17812);
var name_17814 = cljs.core.nth.call(null,vec__17773_17813,(0),null);
var map__17776_17815 = cljs.core.nth.call(null,vec__17773_17813,(1),null);
var map__17776_17816__$1 = ((((!((map__17776_17815 == null)))?((((map__17776_17815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17776_17815.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17776_17815):map__17776_17815);
var doc_17817 = cljs.core.get.call(null,map__17776_17816__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_17818 = cljs.core.get.call(null,map__17776_17816__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_17814);

cljs.core.println.call(null," ",arglists_17818);

if(cljs.core.truth_(doc_17817)){
cljs.core.println.call(null," ",doc_17817);
} else {
}

var G__17819 = seq__17769_17809;
var G__17820 = chunk__17770_17810;
var G__17821 = count__17771_17811;
var G__17822 = (i__17772_17812 + (1));
seq__17769_17809 = G__17819;
chunk__17770_17810 = G__17820;
count__17771_17811 = G__17821;
i__17772_17812 = G__17822;
continue;
} else {
var temp__4657__auto___17823 = cljs.core.seq.call(null,seq__17769_17809);
if(temp__4657__auto___17823){
var seq__17769_17824__$1 = temp__4657__auto___17823;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17769_17824__$1)){
var c__7633__auto___17825 = cljs.core.chunk_first.call(null,seq__17769_17824__$1);
var G__17826 = cljs.core.chunk_rest.call(null,seq__17769_17824__$1);
var G__17827 = c__7633__auto___17825;
var G__17828 = cljs.core.count.call(null,c__7633__auto___17825);
var G__17829 = (0);
seq__17769_17809 = G__17826;
chunk__17770_17810 = G__17827;
count__17771_17811 = G__17828;
i__17772_17812 = G__17829;
continue;
} else {
var vec__17778_17830 = cljs.core.first.call(null,seq__17769_17824__$1);
var name_17831 = cljs.core.nth.call(null,vec__17778_17830,(0),null);
var map__17781_17832 = cljs.core.nth.call(null,vec__17778_17830,(1),null);
var map__17781_17833__$1 = ((((!((map__17781_17832 == null)))?((((map__17781_17832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17781_17832.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17781_17832):map__17781_17832);
var doc_17834 = cljs.core.get.call(null,map__17781_17833__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_17835 = cljs.core.get.call(null,map__17781_17833__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_17831);

cljs.core.println.call(null," ",arglists_17835);

if(cljs.core.truth_(doc_17834)){
cljs.core.println.call(null," ",doc_17834);
} else {
}

var G__17836 = cljs.core.next.call(null,seq__17769_17824__$1);
var G__17837 = null;
var G__17838 = (0);
var G__17839 = (0);
seq__17769_17809 = G__17836;
chunk__17770_17810 = G__17837;
count__17771_17811 = G__17838;
i__17772_17812 = G__17839;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__17783 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__17784 = null;
var count__17785 = (0);
var i__17786 = (0);
while(true){
if((i__17786 < count__17785)){
var role = cljs.core._nth.call(null,chunk__17784,i__17786);
var temp__4657__auto___17840__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___17840__$1)){
var spec_17841 = temp__4657__auto___17840__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_17841));
} else {
}

var G__17842 = seq__17783;
var G__17843 = chunk__17784;
var G__17844 = count__17785;
var G__17845 = (i__17786 + (1));
seq__17783 = G__17842;
chunk__17784 = G__17843;
count__17785 = G__17844;
i__17786 = G__17845;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__17783);
if(temp__4657__auto____$1){
var seq__17783__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17783__$1)){
var c__7633__auto__ = cljs.core.chunk_first.call(null,seq__17783__$1);
var G__17846 = cljs.core.chunk_rest.call(null,seq__17783__$1);
var G__17847 = c__7633__auto__;
var G__17848 = cljs.core.count.call(null,c__7633__auto__);
var G__17849 = (0);
seq__17783 = G__17846;
chunk__17784 = G__17847;
count__17785 = G__17848;
i__17786 = G__17849;
continue;
} else {
var role = cljs.core.first.call(null,seq__17783__$1);
var temp__4657__auto___17850__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___17850__$2)){
var spec_17851 = temp__4657__auto___17850__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_17851));
} else {
}

var G__17852 = cljs.core.next.call(null,seq__17783__$1);
var G__17853 = null;
var G__17854 = (0);
var G__17855 = (0);
seq__17783 = G__17852;
chunk__17784 = G__17853;
count__17785 = G__17854;
i__17786 = G__17855;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map