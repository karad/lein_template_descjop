// Compiled by ClojureScript 1.9.473 {:elide-asserts true, :target :nodejs}
goog.provide('hello_desc2.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
hello_desc2.core.path = cljs.nodejs.require.call(null,"path");
hello_desc2.core.Electron = cljs.nodejs.require.call(null,"electron");
hello_desc2.core.BrowserWindow = hello_desc2.core.Electron.BrowserWindow;
hello_desc2.core.crash_reporter = hello_desc2.core.Electron.crashReporter;
hello_desc2.core.Os = cljs.nodejs.require.call(null,"os");
hello_desc2.core._STAR_win_STAR_ = cljs.core.atom.call(null,null);
hello_desc2.core.app = hello_desc2.core.Electron.app;
hello_desc2.core._main = (function hello_desc2$core$_main(){
hello_desc2.core.crash_reporter.start(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"companyName","companyName",2030952346),"Your Company Name",new cljs.core.Keyword(null,"submitURL","submitURL",-169159433),"http://example.com/"], null)));

cljs.nodejs.process.on("error",(function (err){
return console.log(err);
}));

hello_desc2.core.app.on("window-all-closed",(function (){
if(cljs.core.not_EQ_.call(null,cljs.nodejs.process.platform,"darwin")){
return hello_desc2.core.app.quit();
} else {
return null;
}
}));

return hello_desc2.core.app.on("ready",(function (){
cljs.core.reset_BANG_.call(null,hello_desc2.core._STAR_win_STAR_,(new hello_desc2.core.BrowserWindow(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(800),new cljs.core.Keyword(null,"height","height",1025178622),(600)], null)))));

cljs.core.deref.call(null,hello_desc2.core._STAR_win_STAR_).loadURL([cljs.core.str.cljs$core$IFn$_invoke$arity$1("file://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hello_desc2.core.path.resolve(__dirname,"../index.html"))].join(''));

return cljs.core.deref.call(null,hello_desc2.core._STAR_win_STAR_).on("closed",(function (){
return cljs.core.reset_BANG_.call(null,hello_desc2.core._STAR_win_STAR_,null);
}));
}));
});
cljs.nodejs.enable_util_print_BANG_.call(null);
console.log([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Start descjop application on "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hello_desc2.core.Os.type()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".")].join(''));
cljs.core._STAR_main_cli_fn_STAR_ = hello_desc2.core._main;
