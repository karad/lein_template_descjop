// Compiled by ClojureScript 1.9.473 {:elide-asserts true}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.9";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args18177 = [];
var len__7923__auto___18180 = arguments.length;
var i__7924__auto___18181 = (0);
while(true){
if((i__7924__auto___18181 < len__7923__auto___18180)){
args18177.push((arguments[i__7924__auto___18181]));

var G__18182 = (i__7924__auto___18181 + (1));
i__7924__auto___18181 = G__18182;
continue;
} else {
}
break;
}

var G__18179 = args18177.length;
switch (G__18179) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18177.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__7930__auto__ = [];
var len__7923__auto___18185 = arguments.length;
var i__7924__auto___18186 = (0);
while(true){
if((i__7924__auto___18186 < len__7923__auto___18185)){
args__7930__auto__.push((arguments[i__7924__auto___18186]));

var G__18187 = (i__7924__auto___18186 + (1));
i__7924__auto___18186 = G__18187;
continue;
} else {
}
break;
}

var argseq__7931__auto__ = ((((0) < args__7930__auto__.length))?(new cljs.core.IndexedSeq(args__7930__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__7931__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq18184){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18184));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__7930__auto__ = [];
var len__7923__auto___18189 = arguments.length;
var i__7924__auto___18190 = (0);
while(true){
if((i__7924__auto___18190 < len__7923__auto___18189)){
args__7930__auto__.push((arguments[i__7924__auto___18190]));

var G__18191 = (i__7924__auto___18190 + (1));
i__7924__auto___18190 = G__18191;
continue;
} else {
}
break;
}

var argseq__7931__auto__ = ((((0) < args__7930__auto__.length))?(new cljs.core.IndexedSeq(args__7930__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__7931__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq18188){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18188));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel autoloading "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__18192){
var map__18195 = p__18192;
var map__18195__$1 = ((((!((map__18195 == null)))?((((map__18195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18195.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18195):map__18195);
var message = cljs.core.get.call(null,map__18195__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__18195__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__6814__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6814__auto__)){
return or__6814__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__6802__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__6802__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__6802__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__10044__auto___18357 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10044__auto___18357,ch){
return (function (){
var f__10045__auto__ = (function (){var switch__9932__auto__ = ((function (c__10044__auto___18357,ch){
return (function (state_18326){
var state_val_18327 = (state_18326[(1)]);
if((state_val_18327 === (7))){
var inst_18322 = (state_18326[(2)]);
var state_18326__$1 = state_18326;
var statearr_18328_18358 = state_18326__$1;
(statearr_18328_18358[(2)] = inst_18322);

(statearr_18328_18358[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18327 === (1))){
var state_18326__$1 = state_18326;
var statearr_18329_18359 = state_18326__$1;
(statearr_18329_18359[(2)] = null);

(statearr_18329_18359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18327 === (4))){
var inst_18279 = (state_18326[(7)]);
var inst_18279__$1 = (state_18326[(2)]);
var state_18326__$1 = (function (){var statearr_18330 = state_18326;
(statearr_18330[(7)] = inst_18279__$1);

return statearr_18330;
})();
if(cljs.core.truth_(inst_18279__$1)){
var statearr_18331_18360 = state_18326__$1;
(statearr_18331_18360[(1)] = (5));

} else {
var statearr_18332_18361 = state_18326__$1;
(statearr_18332_18361[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18327 === (15))){
var inst_18286 = (state_18326[(8)]);
var inst_18301 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_18286);
var inst_18302 = cljs.core.first.call(null,inst_18301);
var inst_18303 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_18302);
var inst_18304 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_18303)].join('');
var inst_18305 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_18304);
var state_18326__$1 = state_18326;
var statearr_18333_18362 = state_18326__$1;
(statearr_18333_18362[(2)] = inst_18305);

(statearr_18333_18362[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18327 === (13))){
var inst_18310 = (state_18326[(2)]);
var state_18326__$1 = state_18326;
var statearr_18334_18363 = state_18326__$1;
(statearr_18334_18363[(2)] = inst_18310);

(statearr_18334_18363[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18327 === (6))){
var state_18326__$1 = state_18326;
var statearr_18335_18364 = state_18326__$1;
(statearr_18335_18364[(2)] = null);

(statearr_18335_18364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18327 === (17))){
var inst_18308 = (state_18326[(2)]);
var state_18326__$1 = state_18326;
var statearr_18336_18365 = state_18326__$1;
(statearr_18336_18365[(2)] = inst_18308);

(statearr_18336_18365[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18327 === (3))){
var inst_18324 = (state_18326[(2)]);
var state_18326__$1 = state_18326;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18326__$1,inst_18324);
} else {
if((state_val_18327 === (12))){
var inst_18285 = (state_18326[(9)]);
var inst_18299 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_18285,opts);
var state_18326__$1 = state_18326;
if(cljs.core.truth_(inst_18299)){
var statearr_18337_18366 = state_18326__$1;
(statearr_18337_18366[(1)] = (15));

} else {
var statearr_18338_18367 = state_18326__$1;
(statearr_18338_18367[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18327 === (2))){
var state_18326__$1 = state_18326;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18326__$1,(4),ch);
} else {
if((state_val_18327 === (11))){
var inst_18286 = (state_18326[(8)]);
var inst_18291 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18292 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_18286);
var inst_18293 = cljs.core.async.timeout.call(null,(1000));
var inst_18294 = [inst_18292,inst_18293];
var inst_18295 = (new cljs.core.PersistentVector(null,2,(5),inst_18291,inst_18294,null));
var state_18326__$1 = state_18326;
return cljs.core.async.ioc_alts_BANG_.call(null,state_18326__$1,(14),inst_18295);
} else {
if((state_val_18327 === (9))){
var inst_18286 = (state_18326[(8)]);
var inst_18312 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_18313 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_18286);
var inst_18314 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_18313);
var inst_18315 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_18314)].join('');
var inst_18316 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_18315);
var state_18326__$1 = (function (){var statearr_18339 = state_18326;
(statearr_18339[(10)] = inst_18312);

return statearr_18339;
})();
var statearr_18340_18368 = state_18326__$1;
(statearr_18340_18368[(2)] = inst_18316);

(statearr_18340_18368[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18327 === (5))){
var inst_18279 = (state_18326[(7)]);
var inst_18281 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_18282 = (new cljs.core.PersistentArrayMap(null,2,inst_18281,null));
var inst_18283 = (new cljs.core.PersistentHashSet(null,inst_18282,null));
var inst_18284 = figwheel.client.focus_msgs.call(null,inst_18283,inst_18279);
var inst_18285 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_18284);
var inst_18286 = cljs.core.first.call(null,inst_18284);
var inst_18287 = figwheel.client.autoload_QMARK_.call(null);
var state_18326__$1 = (function (){var statearr_18341 = state_18326;
(statearr_18341[(8)] = inst_18286);

(statearr_18341[(9)] = inst_18285);

return statearr_18341;
})();
if(cljs.core.truth_(inst_18287)){
var statearr_18342_18369 = state_18326__$1;
(statearr_18342_18369[(1)] = (8));

} else {
var statearr_18343_18370 = state_18326__$1;
(statearr_18343_18370[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18327 === (14))){
var inst_18297 = (state_18326[(2)]);
var state_18326__$1 = state_18326;
var statearr_18344_18371 = state_18326__$1;
(statearr_18344_18371[(2)] = inst_18297);

(statearr_18344_18371[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18327 === (16))){
var state_18326__$1 = state_18326;
var statearr_18345_18372 = state_18326__$1;
(statearr_18345_18372[(2)] = null);

(statearr_18345_18372[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18327 === (10))){
var inst_18318 = (state_18326[(2)]);
var state_18326__$1 = (function (){var statearr_18346 = state_18326;
(statearr_18346[(11)] = inst_18318);

return statearr_18346;
})();
var statearr_18347_18373 = state_18326__$1;
(statearr_18347_18373[(2)] = null);

(statearr_18347_18373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18327 === (8))){
var inst_18285 = (state_18326[(9)]);
var inst_18289 = figwheel.client.reload_file_state_QMARK_.call(null,inst_18285,opts);
var state_18326__$1 = state_18326;
if(cljs.core.truth_(inst_18289)){
var statearr_18348_18374 = state_18326__$1;
(statearr_18348_18374[(1)] = (11));

} else {
var statearr_18349_18375 = state_18326__$1;
(statearr_18349_18375[(1)] = (12));

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
});})(c__10044__auto___18357,ch))
;
return ((function (switch__9932__auto__,c__10044__auto___18357,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__9933__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__9933__auto____0 = (function (){
var statearr_18353 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18353[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__9933__auto__);

(statearr_18353[(1)] = (1));

return statearr_18353;
});
var figwheel$client$file_reloader_plugin_$_state_machine__9933__auto____1 = (function (state_18326){
while(true){
var ret_value__9934__auto__ = (function (){try{while(true){
var result__9935__auto__ = switch__9932__auto__.call(null,state_18326);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9935__auto__;
}
break;
}
}catch (e18354){if((e18354 instanceof Object)){
var ex__9936__auto__ = e18354;
var statearr_18355_18376 = state_18326;
(statearr_18355_18376[(5)] = ex__9936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18326);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18354;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18377 = state_18326;
state_18326 = G__18377;
continue;
} else {
return ret_value__9934__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__9933__auto__ = function(state_18326){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__9933__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__9933__auto____1.call(this,state_18326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__9933__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__9933__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__9933__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__9933__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__9933__auto__;
})()
;})(switch__9932__auto__,c__10044__auto___18357,ch))
})();
var state__10046__auto__ = (function (){var statearr_18356 = f__10045__auto__.call(null);
(statearr_18356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10044__auto___18357);

return statearr_18356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10046__auto__);
});})(c__10044__auto___18357,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__18378_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__18378_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_18381 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_18381){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e18380){if((e18380 instanceof Error)){
var e = e18380;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_18381], null));
} else {
var e = e18380;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_18381))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__18382){
var map__18391 = p__18382;
var map__18391__$1 = ((((!((map__18391 == null)))?((((map__18391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18391.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18391):map__18391);
var opts = map__18391__$1;
var build_id = cljs.core.get.call(null,map__18391__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__18391,map__18391__$1,opts,build_id){
return (function (p__18393){
var vec__18394 = p__18393;
var seq__18395 = cljs.core.seq.call(null,vec__18394);
var first__18396 = cljs.core.first.call(null,seq__18395);
var seq__18395__$1 = cljs.core.next.call(null,seq__18395);
var map__18397 = first__18396;
var map__18397__$1 = ((((!((map__18397 == null)))?((((map__18397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18397.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18397):map__18397);
var msg = map__18397__$1;
var msg_name = cljs.core.get.call(null,map__18397__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__18395__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__18394,seq__18395,first__18396,seq__18395__$1,map__18397,map__18397__$1,msg,msg_name,_,map__18391,map__18391__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__18394,seq__18395,first__18396,seq__18395__$1,map__18397,map__18397__$1,msg,msg_name,_,map__18391,map__18391__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__18391,map__18391__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__18405){
var vec__18406 = p__18405;
var seq__18407 = cljs.core.seq.call(null,vec__18406);
var first__18408 = cljs.core.first.call(null,seq__18407);
var seq__18407__$1 = cljs.core.next.call(null,seq__18407);
var map__18409 = first__18408;
var map__18409__$1 = ((((!((map__18409 == null)))?((((map__18409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18409.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18409):map__18409);
var msg = map__18409__$1;
var msg_name = cljs.core.get.call(null,map__18409__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__18407__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__18411){
var map__18423 = p__18411;
var map__18423__$1 = ((((!((map__18423 == null)))?((((map__18423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18423.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18423):map__18423);
var on_compile_warning = cljs.core.get.call(null,map__18423__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__18423__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__18423,map__18423__$1,on_compile_warning,on_compile_fail){
return (function (p__18425){
var vec__18426 = p__18425;
var seq__18427 = cljs.core.seq.call(null,vec__18426);
var first__18428 = cljs.core.first.call(null,seq__18427);
var seq__18427__$1 = cljs.core.next.call(null,seq__18427);
var map__18429 = first__18428;
var map__18429__$1 = ((((!((map__18429 == null)))?((((map__18429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18429.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18429):map__18429);
var msg = map__18429__$1;
var msg_name = cljs.core.get.call(null,map__18429__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__18427__$1;
var pred__18431 = cljs.core._EQ_;
var expr__18432 = msg_name;
if(cljs.core.truth_(pred__18431.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__18432))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__18431.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__18432))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__18423,map__18423__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__10044__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10044__auto__,msg_hist,msg_names,msg){
return (function (){
var f__10045__auto__ = (function (){var switch__9932__auto__ = ((function (c__10044__auto__,msg_hist,msg_names,msg){
return (function (state_18660){
var state_val_18661 = (state_18660[(1)]);
if((state_val_18661 === (7))){
var inst_18580 = (state_18660[(2)]);
var state_18660__$1 = state_18660;
if(cljs.core.truth_(inst_18580)){
var statearr_18662_18712 = state_18660__$1;
(statearr_18662_18712[(1)] = (8));

} else {
var statearr_18663_18713 = state_18660__$1;
(statearr_18663_18713[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18661 === (20))){
var inst_18654 = (state_18660[(2)]);
var state_18660__$1 = state_18660;
var statearr_18664_18714 = state_18660__$1;
(statearr_18664_18714[(2)] = inst_18654);

(statearr_18664_18714[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18661 === (27))){
var inst_18650 = (state_18660[(2)]);
var state_18660__$1 = state_18660;
var statearr_18665_18715 = state_18660__$1;
(statearr_18665_18715[(2)] = inst_18650);

(statearr_18665_18715[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18661 === (1))){
var inst_18573 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_18660__$1 = state_18660;
if(cljs.core.truth_(inst_18573)){
var statearr_18666_18716 = state_18660__$1;
(statearr_18666_18716[(1)] = (2));

} else {
var statearr_18667_18717 = state_18660__$1;
(statearr_18667_18717[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18661 === (24))){
var inst_18652 = (state_18660[(2)]);
var state_18660__$1 = state_18660;
var statearr_18668_18718 = state_18660__$1;
(statearr_18668_18718[(2)] = inst_18652);

(statearr_18668_18718[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18661 === (4))){
var inst_18658 = (state_18660[(2)]);
var state_18660__$1 = state_18660;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18660__$1,inst_18658);
} else {
if((state_val_18661 === (15))){
var inst_18656 = (state_18660[(2)]);
var state_18660__$1 = state_18660;
var statearr_18669_18719 = state_18660__$1;
(statearr_18669_18719[(2)] = inst_18656);

(statearr_18669_18719[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18661 === (21))){
var inst_18609 = (state_18660[(2)]);
var inst_18610 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_18611 = figwheel.client.auto_jump_to_error.call(null,opts,inst_18610);
var state_18660__$1 = (function (){var statearr_18670 = state_18660;
(statearr_18670[(7)] = inst_18609);

return statearr_18670;
})();
var statearr_18671_18720 = state_18660__$1;
(statearr_18671_18720[(2)] = inst_18611);

(statearr_18671_18720[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18661 === (31))){
var inst_18639 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_18660__$1 = state_18660;
if(cljs.core.truth_(inst_18639)){
var statearr_18672_18721 = state_18660__$1;
(statearr_18672_18721[(1)] = (34));

} else {
var statearr_18673_18722 = state_18660__$1;
(statearr_18673_18722[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18661 === (32))){
var inst_18648 = (state_18660[(2)]);
var state_18660__$1 = state_18660;
var statearr_18674_18723 = state_18660__$1;
(statearr_18674_18723[(2)] = inst_18648);

(statearr_18674_18723[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18661 === (33))){
var inst_18635 = (state_18660[(2)]);
var inst_18636 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_18637 = figwheel.client.auto_jump_to_error.call(null,opts,inst_18636);
var state_18660__$1 = (function (){var statearr_18675 = state_18660;
(statearr_18675[(8)] = inst_18635);

return statearr_18675;
})();
var statearr_18676_18724 = state_18660__$1;
(statearr_18676_18724[(2)] = inst_18637);

(statearr_18676_18724[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18661 === (13))){
var inst_18594 = figwheel.client.heads_up.clear.call(null);
var state_18660__$1 = state_18660;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18660__$1,(16),inst_18594);
} else {
if((state_val_18661 === (22))){
var inst_18615 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_18616 = figwheel.client.heads_up.append_warning_message.call(null,inst_18615);
var state_18660__$1 = state_18660;
var statearr_18677_18725 = state_18660__$1;
(statearr_18677_18725[(2)] = inst_18616);

(statearr_18677_18725[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18661 === (36))){
var inst_18646 = (state_18660[(2)]);
var state_18660__$1 = state_18660;
var statearr_18678_18726 = state_18660__$1;
(statearr_18678_18726[(2)] = inst_18646);

(statearr_18678_18726[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18661 === (29))){
var inst_18626 = (state_18660[(2)]);
var inst_18627 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_18628 = figwheel.client.auto_jump_to_error.call(null,opts,inst_18627);
var state_18660__$1 = (function (){var statearr_18679 = state_18660;
(statearr_18679[(9)] = inst_18626);

return statearr_18679;
})();
var statearr_18680_18727 = state_18660__$1;
(statearr_18680_18727[(2)] = inst_18628);

(statearr_18680_18727[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18661 === (6))){
var inst_18575 = (state_18660[(10)]);
var state_18660__$1 = state_18660;
var statearr_18681_18728 = state_18660__$1;
(statearr_18681_18728[(2)] = inst_18575);

(statearr_18681_18728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18661 === (28))){
var inst_18622 = (state_18660[(2)]);
var inst_18623 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_18624 = figwheel.client.heads_up.display_warning.call(null,inst_18623);
var state_18660__$1 = (function (){var statearr_18682 = state_18660;
(statearr_18682[(11)] = inst_18622);

return statearr_18682;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18660__$1,(29),inst_18624);
} else {
if((state_val_18661 === (25))){
var inst_18620 = figwheel.client.heads_up.clear.call(null);
var state_18660__$1 = state_18660;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18660__$1,(28),inst_18620);
} else {
if((state_val_18661 === (34))){
var inst_18641 = figwheel.client.heads_up.flash_loaded.call(null);
var state_18660__$1 = state_18660;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18660__$1,(37),inst_18641);
} else {
if((state_val_18661 === (17))){
var inst_18600 = (state_18660[(2)]);
var inst_18601 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_18602 = figwheel.client.auto_jump_to_error.call(null,opts,inst_18601);
var state_18660__$1 = (function (){var statearr_18683 = state_18660;
(statearr_18683[(12)] = inst_18600);

return statearr_18683;
})();
var statearr_18684_18729 = state_18660__$1;
(statearr_18684_18729[(2)] = inst_18602);

(statearr_18684_18729[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18661 === (3))){
var inst_18592 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_18660__$1 = state_18660;
if(cljs.core.truth_(inst_18592)){
var statearr_18685_18730 = state_18660__$1;
(statearr_18685_18730[(1)] = (13));

} else {
var statearr_18686_18731 = state_18660__$1;
(statearr_18686_18731[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18661 === (12))){
var inst_18588 = (state_18660[(2)]);
var state_18660__$1 = state_18660;
var statearr_18687_18732 = state_18660__$1;
(statearr_18687_18732[(2)] = inst_18588);

(statearr_18687_18732[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18661 === (2))){
var inst_18575 = (state_18660[(10)]);
var inst_18575__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_18660__$1 = (function (){var statearr_18688 = state_18660;
(statearr_18688[(10)] = inst_18575__$1);

return statearr_18688;
})();
if(cljs.core.truth_(inst_18575__$1)){
var statearr_18689_18733 = state_18660__$1;
(statearr_18689_18733[(1)] = (5));

} else {
var statearr_18690_18734 = state_18660__$1;
(statearr_18690_18734[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18661 === (23))){
var inst_18618 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_18660__$1 = state_18660;
if(cljs.core.truth_(inst_18618)){
var statearr_18691_18735 = state_18660__$1;
(statearr_18691_18735[(1)] = (25));

} else {
var statearr_18692_18736 = state_18660__$1;
(statearr_18692_18736[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18661 === (35))){
var state_18660__$1 = state_18660;
var statearr_18693_18737 = state_18660__$1;
(statearr_18693_18737[(2)] = null);

(statearr_18693_18737[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18661 === (19))){
var inst_18613 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_18660__$1 = state_18660;
if(cljs.core.truth_(inst_18613)){
var statearr_18694_18738 = state_18660__$1;
(statearr_18694_18738[(1)] = (22));

} else {
var statearr_18695_18739 = state_18660__$1;
(statearr_18695_18739[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18661 === (11))){
var inst_18584 = (state_18660[(2)]);
var state_18660__$1 = state_18660;
var statearr_18696_18740 = state_18660__$1;
(statearr_18696_18740[(2)] = inst_18584);

(statearr_18696_18740[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18661 === (9))){
var inst_18586 = figwheel.client.heads_up.clear.call(null);
var state_18660__$1 = state_18660;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18660__$1,(12),inst_18586);
} else {
if((state_val_18661 === (5))){
var inst_18577 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_18660__$1 = state_18660;
var statearr_18697_18741 = state_18660__$1;
(statearr_18697_18741[(2)] = inst_18577);

(statearr_18697_18741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18661 === (14))){
var inst_18604 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_18660__$1 = state_18660;
if(cljs.core.truth_(inst_18604)){
var statearr_18698_18742 = state_18660__$1;
(statearr_18698_18742[(1)] = (18));

} else {
var statearr_18699_18743 = state_18660__$1;
(statearr_18699_18743[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18661 === (26))){
var inst_18630 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_18660__$1 = state_18660;
if(cljs.core.truth_(inst_18630)){
var statearr_18700_18744 = state_18660__$1;
(statearr_18700_18744[(1)] = (30));

} else {
var statearr_18701_18745 = state_18660__$1;
(statearr_18701_18745[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18661 === (16))){
var inst_18596 = (state_18660[(2)]);
var inst_18597 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_18598 = figwheel.client.heads_up.display_exception.call(null,inst_18597);
var state_18660__$1 = (function (){var statearr_18702 = state_18660;
(statearr_18702[(13)] = inst_18596);

return statearr_18702;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18660__$1,(17),inst_18598);
} else {
if((state_val_18661 === (30))){
var inst_18632 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_18633 = figwheel.client.heads_up.display_warning.call(null,inst_18632);
var state_18660__$1 = state_18660;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18660__$1,(33),inst_18633);
} else {
if((state_val_18661 === (10))){
var inst_18590 = (state_18660[(2)]);
var state_18660__$1 = state_18660;
var statearr_18703_18746 = state_18660__$1;
(statearr_18703_18746[(2)] = inst_18590);

(statearr_18703_18746[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18661 === (18))){
var inst_18606 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_18607 = figwheel.client.heads_up.display_exception.call(null,inst_18606);
var state_18660__$1 = state_18660;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18660__$1,(21),inst_18607);
} else {
if((state_val_18661 === (37))){
var inst_18643 = (state_18660[(2)]);
var state_18660__$1 = state_18660;
var statearr_18704_18747 = state_18660__$1;
(statearr_18704_18747[(2)] = inst_18643);

(statearr_18704_18747[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18661 === (8))){
var inst_18582 = figwheel.client.heads_up.flash_loaded.call(null);
var state_18660__$1 = state_18660;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18660__$1,(11),inst_18582);
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
});})(c__10044__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__9932__auto__,c__10044__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__9933__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__9933__auto____0 = (function (){
var statearr_18708 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18708[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__9933__auto__);

(statearr_18708[(1)] = (1));

return statearr_18708;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__9933__auto____1 = (function (state_18660){
while(true){
var ret_value__9934__auto__ = (function (){try{while(true){
var result__9935__auto__ = switch__9932__auto__.call(null,state_18660);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9935__auto__;
}
break;
}
}catch (e18709){if((e18709 instanceof Object)){
var ex__9936__auto__ = e18709;
var statearr_18710_18748 = state_18660;
(statearr_18710_18748[(5)] = ex__9936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18660);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18709;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18749 = state_18660;
state_18660 = G__18749;
continue;
} else {
return ret_value__9934__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__9933__auto__ = function(state_18660){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__9933__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__9933__auto____1.call(this,state_18660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__9933__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__9933__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__9933__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__9933__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__9933__auto__;
})()
;})(switch__9932__auto__,c__10044__auto__,msg_hist,msg_names,msg))
})();
var state__10046__auto__ = (function (){var statearr_18711 = f__10045__auto__.call(null);
(statearr_18711[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10044__auto__);

return statearr_18711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10046__auto__);
});})(c__10044__auto__,msg_hist,msg_names,msg))
);

return c__10044__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__10044__auto___18812 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10044__auto___18812,ch){
return (function (){
var f__10045__auto__ = (function (){var switch__9932__auto__ = ((function (c__10044__auto___18812,ch){
return (function (state_18795){
var state_val_18796 = (state_18795[(1)]);
if((state_val_18796 === (1))){
var state_18795__$1 = state_18795;
var statearr_18797_18813 = state_18795__$1;
(statearr_18797_18813[(2)] = null);

(statearr_18797_18813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18796 === (2))){
var state_18795__$1 = state_18795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18795__$1,(4),ch);
} else {
if((state_val_18796 === (3))){
var inst_18793 = (state_18795[(2)]);
var state_18795__$1 = state_18795;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18795__$1,inst_18793);
} else {
if((state_val_18796 === (4))){
var inst_18783 = (state_18795[(7)]);
var inst_18783__$1 = (state_18795[(2)]);
var state_18795__$1 = (function (){var statearr_18798 = state_18795;
(statearr_18798[(7)] = inst_18783__$1);

return statearr_18798;
})();
if(cljs.core.truth_(inst_18783__$1)){
var statearr_18799_18814 = state_18795__$1;
(statearr_18799_18814[(1)] = (5));

} else {
var statearr_18800_18815 = state_18795__$1;
(statearr_18800_18815[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18796 === (5))){
var inst_18783 = (state_18795[(7)]);
var inst_18785 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_18783);
var state_18795__$1 = state_18795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18795__$1,(8),inst_18785);
} else {
if((state_val_18796 === (6))){
var state_18795__$1 = state_18795;
var statearr_18801_18816 = state_18795__$1;
(statearr_18801_18816[(2)] = null);

(statearr_18801_18816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18796 === (7))){
var inst_18791 = (state_18795[(2)]);
var state_18795__$1 = state_18795;
var statearr_18802_18817 = state_18795__$1;
(statearr_18802_18817[(2)] = inst_18791);

(statearr_18802_18817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18796 === (8))){
var inst_18787 = (state_18795[(2)]);
var state_18795__$1 = (function (){var statearr_18803 = state_18795;
(statearr_18803[(8)] = inst_18787);

return statearr_18803;
})();
var statearr_18804_18818 = state_18795__$1;
(statearr_18804_18818[(2)] = null);

(statearr_18804_18818[(1)] = (2));


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
});})(c__10044__auto___18812,ch))
;
return ((function (switch__9932__auto__,c__10044__auto___18812,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__9933__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__9933__auto____0 = (function (){
var statearr_18808 = [null,null,null,null,null,null,null,null,null];
(statearr_18808[(0)] = figwheel$client$heads_up_plugin_$_state_machine__9933__auto__);

(statearr_18808[(1)] = (1));

return statearr_18808;
});
var figwheel$client$heads_up_plugin_$_state_machine__9933__auto____1 = (function (state_18795){
while(true){
var ret_value__9934__auto__ = (function (){try{while(true){
var result__9935__auto__ = switch__9932__auto__.call(null,state_18795);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9935__auto__;
}
break;
}
}catch (e18809){if((e18809 instanceof Object)){
var ex__9936__auto__ = e18809;
var statearr_18810_18819 = state_18795;
(statearr_18810_18819[(5)] = ex__9936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18795);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18809;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18820 = state_18795;
state_18795 = G__18820;
continue;
} else {
return ret_value__9934__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__9933__auto__ = function(state_18795){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__9933__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__9933__auto____1.call(this,state_18795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__9933__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__9933__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__9933__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__9933__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__9933__auto__;
})()
;})(switch__9932__auto__,c__10044__auto___18812,ch))
})();
var state__10046__auto__ = (function (){var statearr_18811 = f__10045__auto__.call(null);
(statearr_18811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10044__auto___18812);

return statearr_18811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10046__auto__);
});})(c__10044__auto___18812,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__10044__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10044__auto__){
return (function (){
var f__10045__auto__ = (function (){var switch__9932__auto__ = ((function (c__10044__auto__){
return (function (state_18841){
var state_val_18842 = (state_18841[(1)]);
if((state_val_18842 === (1))){
var inst_18836 = cljs.core.async.timeout.call(null,(3000));
var state_18841__$1 = state_18841;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18841__$1,(2),inst_18836);
} else {
if((state_val_18842 === (2))){
var inst_18838 = (state_18841[(2)]);
var inst_18839 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_18841__$1 = (function (){var statearr_18843 = state_18841;
(statearr_18843[(7)] = inst_18838);

return statearr_18843;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18841__$1,inst_18839);
} else {
return null;
}
}
});})(c__10044__auto__))
;
return ((function (switch__9932__auto__,c__10044__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__9933__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__9933__auto____0 = (function (){
var statearr_18847 = [null,null,null,null,null,null,null,null];
(statearr_18847[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__9933__auto__);

(statearr_18847[(1)] = (1));

return statearr_18847;
});
var figwheel$client$enforce_project_plugin_$_state_machine__9933__auto____1 = (function (state_18841){
while(true){
var ret_value__9934__auto__ = (function (){try{while(true){
var result__9935__auto__ = switch__9932__auto__.call(null,state_18841);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9935__auto__;
}
break;
}
}catch (e18848){if((e18848 instanceof Object)){
var ex__9936__auto__ = e18848;
var statearr_18849_18851 = state_18841;
(statearr_18849_18851[(5)] = ex__9936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18841);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18848;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18852 = state_18841;
state_18841 = G__18852;
continue;
} else {
return ret_value__9934__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__9933__auto__ = function(state_18841){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__9933__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__9933__auto____1.call(this,state_18841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__9933__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__9933__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__9933__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__9933__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__9933__auto__;
})()
;})(switch__9932__auto__,c__10044__auto__))
})();
var state__10046__auto__ = (function (){var statearr_18850 = f__10045__auto__.call(null);
(statearr_18850[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10044__auto__);

return statearr_18850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10046__auto__);
});})(c__10044__auto__))
);

return c__10044__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__10044__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10044__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__10045__auto__ = (function (){var switch__9932__auto__ = ((function (c__10044__auto__,figwheel_version,temp__4657__auto__){
return (function (state_18875){
var state_val_18876 = (state_18875[(1)]);
if((state_val_18876 === (1))){
var inst_18869 = cljs.core.async.timeout.call(null,(2000));
var state_18875__$1 = state_18875;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18875__$1,(2),inst_18869);
} else {
if((state_val_18876 === (2))){
var inst_18871 = (state_18875[(2)]);
var inst_18872 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_18873 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_18872);
var state_18875__$1 = (function (){var statearr_18877 = state_18875;
(statearr_18877[(7)] = inst_18871);

return statearr_18877;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18875__$1,inst_18873);
} else {
return null;
}
}
});})(c__10044__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__9932__auto__,c__10044__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__9933__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__9933__auto____0 = (function (){
var statearr_18881 = [null,null,null,null,null,null,null,null];
(statearr_18881[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__9933__auto__);

(statearr_18881[(1)] = (1));

return statearr_18881;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__9933__auto____1 = (function (state_18875){
while(true){
var ret_value__9934__auto__ = (function (){try{while(true){
var result__9935__auto__ = switch__9932__auto__.call(null,state_18875);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9935__auto__;
}
break;
}
}catch (e18882){if((e18882 instanceof Object)){
var ex__9936__auto__ = e18882;
var statearr_18883_18885 = state_18875;
(statearr_18883_18885[(5)] = ex__9936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18875);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18882;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18886 = state_18875;
state_18875 = G__18886;
continue;
} else {
return ret_value__9934__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__9933__auto__ = function(state_18875){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__9933__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__9933__auto____1.call(this,state_18875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__9933__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__9933__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__9933__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__9933__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__9933__auto__;
})()
;})(switch__9932__auto__,c__10044__auto__,figwheel_version,temp__4657__auto__))
})();
var state__10046__auto__ = (function (){var statearr_18884 = f__10045__auto__.call(null);
(statearr_18884[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10044__auto__);

return statearr_18884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10046__auto__);
});})(c__10044__auto__,figwheel_version,temp__4657__auto__))
);

return c__10044__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__18887){
var map__18891 = p__18887;
var map__18891__$1 = ((((!((map__18891 == null)))?((((map__18891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18891.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18891):map__18891);
var file = cljs.core.get.call(null,map__18891__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__18891__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__18891__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__18893 = "";
var G__18893__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18893),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__18893);
var G__18893__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18893__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__18893__$1);
if(cljs.core.truth_((function (){var and__6802__auto__ = line;
if(cljs.core.truth_(and__6802__auto__)){
return column;
} else {
return and__6802__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18893__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__18893__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__18894){
var map__18901 = p__18894;
var map__18901__$1 = ((((!((map__18901 == null)))?((((map__18901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18901.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18901):map__18901);
var ed = map__18901__$1;
var formatted_exception = cljs.core.get.call(null,map__18901__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__18901__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__18901__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__18903_18907 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__18904_18908 = null;
var count__18905_18909 = (0);
var i__18906_18910 = (0);
while(true){
if((i__18906_18910 < count__18905_18909)){
var msg_18911 = cljs.core._nth.call(null,chunk__18904_18908,i__18906_18910);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_18911);

var G__18912 = seq__18903_18907;
var G__18913 = chunk__18904_18908;
var G__18914 = count__18905_18909;
var G__18915 = (i__18906_18910 + (1));
seq__18903_18907 = G__18912;
chunk__18904_18908 = G__18913;
count__18905_18909 = G__18914;
i__18906_18910 = G__18915;
continue;
} else {
var temp__4657__auto___18916 = cljs.core.seq.call(null,seq__18903_18907);
if(temp__4657__auto___18916){
var seq__18903_18917__$1 = temp__4657__auto___18916;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18903_18917__$1)){
var c__7633__auto___18918 = cljs.core.chunk_first.call(null,seq__18903_18917__$1);
var G__18919 = cljs.core.chunk_rest.call(null,seq__18903_18917__$1);
var G__18920 = c__7633__auto___18918;
var G__18921 = cljs.core.count.call(null,c__7633__auto___18918);
var G__18922 = (0);
seq__18903_18907 = G__18919;
chunk__18904_18908 = G__18920;
count__18905_18909 = G__18921;
i__18906_18910 = G__18922;
continue;
} else {
var msg_18923 = cljs.core.first.call(null,seq__18903_18917__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_18923);

var G__18924 = cljs.core.next.call(null,seq__18903_18917__$1);
var G__18925 = null;
var G__18926 = (0);
var G__18927 = (0);
seq__18903_18907 = G__18924;
chunk__18904_18908 = G__18925;
count__18905_18909 = G__18926;
i__18906_18910 = G__18927;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Error on "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__18928){
var map__18931 = p__18928;
var map__18931__$1 = ((((!((map__18931 == null)))?((((map__18931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18931.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18931):map__18931);
var w = map__18931__$1;
var message = cljs.core.get.call(null,map__18931__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Compile Warning - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"app/dev/js/out_front/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"app/dev/js/out_front/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ws://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__6802__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__6802__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__6802__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__18943 = cljs.core.seq.call(null,plugins);
var chunk__18944 = null;
var count__18945 = (0);
var i__18946 = (0);
while(true){
if((i__18946 < count__18945)){
var vec__18947 = cljs.core._nth.call(null,chunk__18944,i__18946);
var k = cljs.core.nth.call(null,vec__18947,(0),null);
var plugin = cljs.core.nth.call(null,vec__18947,(1),null);
if(cljs.core.truth_(plugin)){
var pl_18953 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__18943,chunk__18944,count__18945,i__18946,pl_18953,vec__18947,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_18953.call(null,msg_hist);
});})(seq__18943,chunk__18944,count__18945,i__18946,pl_18953,vec__18947,k,plugin))
);
} else {
}

var G__18954 = seq__18943;
var G__18955 = chunk__18944;
var G__18956 = count__18945;
var G__18957 = (i__18946 + (1));
seq__18943 = G__18954;
chunk__18944 = G__18955;
count__18945 = G__18956;
i__18946 = G__18957;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__18943);
if(temp__4657__auto__){
var seq__18943__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18943__$1)){
var c__7633__auto__ = cljs.core.chunk_first.call(null,seq__18943__$1);
var G__18958 = cljs.core.chunk_rest.call(null,seq__18943__$1);
var G__18959 = c__7633__auto__;
var G__18960 = cljs.core.count.call(null,c__7633__auto__);
var G__18961 = (0);
seq__18943 = G__18958;
chunk__18944 = G__18959;
count__18945 = G__18960;
i__18946 = G__18961;
continue;
} else {
var vec__18950 = cljs.core.first.call(null,seq__18943__$1);
var k = cljs.core.nth.call(null,vec__18950,(0),null);
var plugin = cljs.core.nth.call(null,vec__18950,(1),null);
if(cljs.core.truth_(plugin)){
var pl_18962 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__18943,chunk__18944,count__18945,i__18946,pl_18962,vec__18950,k,plugin,seq__18943__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_18962.call(null,msg_hist);
});})(seq__18943,chunk__18944,count__18945,i__18946,pl_18962,vec__18950,k,plugin,seq__18943__$1,temp__4657__auto__))
);
} else {
}

var G__18963 = cljs.core.next.call(null,seq__18943__$1);
var G__18964 = null;
var G__18965 = (0);
var G__18966 = (0);
seq__18943 = G__18963;
chunk__18944 = G__18964;
count__18945 = G__18965;
i__18946 = G__18966;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args18967 = [];
var len__7923__auto___18974 = arguments.length;
var i__7924__auto___18975 = (0);
while(true){
if((i__7924__auto___18975 < len__7923__auto___18974)){
args18967.push((arguments[i__7924__auto___18975]));

var G__18976 = (i__7924__auto___18975 + (1));
i__7924__auto___18975 = G__18976;
continue;
} else {
}
break;
}

var G__18969 = args18967.length;
switch (G__18969) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18967.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__18970_18978 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__18971_18979 = null;
var count__18972_18980 = (0);
var i__18973_18981 = (0);
while(true){
if((i__18973_18981 < count__18972_18980)){
var msg_18982 = cljs.core._nth.call(null,chunk__18971_18979,i__18973_18981);
figwheel.client.socket.handle_incoming_message.call(null,msg_18982);

var G__18983 = seq__18970_18978;
var G__18984 = chunk__18971_18979;
var G__18985 = count__18972_18980;
var G__18986 = (i__18973_18981 + (1));
seq__18970_18978 = G__18983;
chunk__18971_18979 = G__18984;
count__18972_18980 = G__18985;
i__18973_18981 = G__18986;
continue;
} else {
var temp__4657__auto___18987 = cljs.core.seq.call(null,seq__18970_18978);
if(temp__4657__auto___18987){
var seq__18970_18988__$1 = temp__4657__auto___18987;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18970_18988__$1)){
var c__7633__auto___18989 = cljs.core.chunk_first.call(null,seq__18970_18988__$1);
var G__18990 = cljs.core.chunk_rest.call(null,seq__18970_18988__$1);
var G__18991 = c__7633__auto___18989;
var G__18992 = cljs.core.count.call(null,c__7633__auto___18989);
var G__18993 = (0);
seq__18970_18978 = G__18990;
chunk__18971_18979 = G__18991;
count__18972_18980 = G__18992;
i__18973_18981 = G__18993;
continue;
} else {
var msg_18994 = cljs.core.first.call(null,seq__18970_18988__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_18994);

var G__18995 = cljs.core.next.call(null,seq__18970_18988__$1);
var G__18996 = null;
var G__18997 = (0);
var G__18998 = (0);
seq__18970_18978 = G__18995;
chunk__18971_18979 = G__18996;
count__18972_18980 = G__18997;
i__18973_18981 = G__18998;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__7930__auto__ = [];
var len__7923__auto___19003 = arguments.length;
var i__7924__auto___19004 = (0);
while(true){
if((i__7924__auto___19004 < len__7923__auto___19003)){
args__7930__auto__.push((arguments[i__7924__auto___19004]));

var G__19005 = (i__7924__auto___19004 + (1));
i__7924__auto___19004 = G__19005;
continue;
} else {
}
break;
}

var argseq__7931__auto__ = ((((0) < args__7930__auto__.length))?(new cljs.core.IndexedSeq(args__7930__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__7931__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__19000){
var map__19001 = p__19000;
var map__19001__$1 = ((((!((map__19001 == null)))?((((map__19001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19001.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19001):map__19001);
var opts = map__19001__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq18999){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18999));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e19007){if((e19007 instanceof Error)){
var e = e19007;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e19007;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__19011){
var map__19012 = p__19011;
var map__19012__$1 = ((((!((map__19012 == null)))?((((map__19012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19012.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19012):map__19012);
var msg_name = cljs.core.get.call(null,map__19012__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map