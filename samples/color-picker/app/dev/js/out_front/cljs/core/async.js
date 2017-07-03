// Compiled by ClojureScript 1.9.473 {:elide-asserts true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args10089 = [];
var len__7923__auto___10095 = arguments.length;
var i__7924__auto___10096 = (0);
while(true){
if((i__7924__auto___10096 < len__7923__auto___10095)){
args10089.push((arguments[i__7924__auto___10096]));

var G__10097 = (i__7924__auto___10096 + (1));
i__7924__auto___10096 = G__10097;
continue;
} else {
}
break;
}

var G__10091 = args10089.length;
switch (G__10091) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args10089.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async10092 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10092 = (function (f,blockable,meta10093){
this.f = f;
this.blockable = blockable;
this.meta10093 = meta10093;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10092.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10094,meta10093__$1){
var self__ = this;
var _10094__$1 = this;
return (new cljs.core.async.t_cljs$core$async10092(self__.f,self__.blockable,meta10093__$1));
});

cljs.core.async.t_cljs$core$async10092.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10094){
var self__ = this;
var _10094__$1 = this;
return self__.meta10093;
});

cljs.core.async.t_cljs$core$async10092.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10092.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async10092.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async10092.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async10092.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta10093","meta10093",-29108929,null)], null);
});

cljs.core.async.t_cljs$core$async10092.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10092.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10092";

cljs.core.async.t_cljs$core$async10092.cljs$lang$ctorPrWriter = (function (this__7425__auto__,writer__7426__auto__,opt__7427__auto__){
return cljs.core._write.call(null,writer__7426__auto__,"cljs.core.async/t_cljs$core$async10092");
});

cljs.core.async.__GT_t_cljs$core$async10092 = (function cljs$core$async$__GT_t_cljs$core$async10092(f__$1,blockable__$1,meta10093){
return (new cljs.core.async.t_cljs$core$async10092(f__$1,blockable__$1,meta10093));
});

}

return (new cljs.core.async.t_cljs$core$async10092(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args10101 = [];
var len__7923__auto___10104 = arguments.length;
var i__7924__auto___10105 = (0);
while(true){
if((i__7924__auto___10105 < len__7923__auto___10104)){
args10101.push((arguments[i__7924__auto___10105]));

var G__10106 = (i__7924__auto___10105 + (1));
i__7924__auto___10105 = G__10106;
continue;
} else {
}
break;
}

var G__10103 = args10101.length;
switch (G__10103) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args10101.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args10108 = [];
var len__7923__auto___10111 = arguments.length;
var i__7924__auto___10112 = (0);
while(true){
if((i__7924__auto___10112 < len__7923__auto___10111)){
args10108.push((arguments[i__7924__auto___10112]));

var G__10113 = (i__7924__auto___10112 + (1));
i__7924__auto___10112 = G__10113;
continue;
} else {
}
break;
}

var G__10110 = args10108.length;
switch (G__10110) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args10108.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args10115 = [];
var len__7923__auto___10118 = arguments.length;
var i__7924__auto___10119 = (0);
while(true){
if((i__7924__auto___10119 < len__7923__auto___10118)){
args10115.push((arguments[i__7924__auto___10119]));

var G__10120 = (i__7924__auto___10119 + (1));
i__7924__auto___10119 = G__10120;
continue;
} else {
}
break;
}

var G__10117 = args10115.length;
switch (G__10117) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args10115.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_10122 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_10122);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_10122,ret){
return (function (){
return fn1.call(null,val_10122);
});})(val_10122,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args10123 = [];
var len__7923__auto___10126 = arguments.length;
var i__7924__auto___10127 = (0);
while(true){
if((i__7924__auto___10127 < len__7923__auto___10126)){
args10123.push((arguments[i__7924__auto___10127]));

var G__10128 = (i__7924__auto___10127 + (1));
i__7924__auto___10127 = G__10128;
continue;
} else {
}
break;
}

var G__10125 = args10123.length;
switch (G__10125) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args10123.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__7737__auto___10130 = n;
var x_10131 = (0);
while(true){
if((x_10131 < n__7737__auto___10130)){
(a[x_10131] = (0));

var G__10132 = (x_10131 + (1));
x_10131 = G__10132;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__10133 = (i + (1));
i = G__10133;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async10137 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10137 = (function (flag,meta10138){
this.flag = flag;
this.meta10138 = meta10138;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_10139,meta10138__$1){
var self__ = this;
var _10139__$1 = this;
return (new cljs.core.async.t_cljs$core$async10137(self__.flag,meta10138__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async10137.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_10139){
var self__ = this;
var _10139__$1 = this;
return self__.meta10138;
});})(flag))
;

cljs.core.async.t_cljs$core$async10137.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10137.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async10137.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async10137.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async10137.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta10138","meta10138",-367001788,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async10137.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10137.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10137";

cljs.core.async.t_cljs$core$async10137.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7425__auto__,writer__7426__auto__,opt__7427__auto__){
return cljs.core._write.call(null,writer__7426__auto__,"cljs.core.async/t_cljs$core$async10137");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async10137 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async10137(flag__$1,meta10138){
return (new cljs.core.async.t_cljs$core$async10137(flag__$1,meta10138));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async10137(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async10143 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10143 = (function (flag,cb,meta10144){
this.flag = flag;
this.cb = cb;
this.meta10144 = meta10144;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10143.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10145,meta10144__$1){
var self__ = this;
var _10145__$1 = this;
return (new cljs.core.async.t_cljs$core$async10143(self__.flag,self__.cb,meta10144__$1));
});

cljs.core.async.t_cljs$core$async10143.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10145){
var self__ = this;
var _10145__$1 = this;
return self__.meta10144;
});

cljs.core.async.t_cljs$core$async10143.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10143.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async10143.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async10143.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async10143.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta10144","meta10144",967707820,null)], null);
});

cljs.core.async.t_cljs$core$async10143.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10143.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10143";

cljs.core.async.t_cljs$core$async10143.cljs$lang$ctorPrWriter = (function (this__7425__auto__,writer__7426__auto__,opt__7427__auto__){
return cljs.core._write.call(null,writer__7426__auto__,"cljs.core.async/t_cljs$core$async10143");
});

cljs.core.async.__GT_t_cljs$core$async10143 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async10143(flag__$1,cb__$1,meta10144){
return (new cljs.core.async.t_cljs$core$async10143(flag__$1,cb__$1,meta10144));
});

}

return (new cljs.core.async.t_cljs$core$async10143(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10146_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10146_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10147_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10147_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__6814__auto__ = wport;
if(cljs.core.truth_(or__6814__auto__)){
return or__6814__auto__;
} else {
return port;
}
})()], null));
} else {
var G__10148 = (i + (1));
i = G__10148;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6814__auto__ = ret;
if(cljs.core.truth_(or__6814__auto__)){
return or__6814__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__6802__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__6802__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__6802__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__7930__auto__ = [];
var len__7923__auto___10154 = arguments.length;
var i__7924__auto___10155 = (0);
while(true){
if((i__7924__auto___10155 < len__7923__auto___10154)){
args__7930__auto__.push((arguments[i__7924__auto___10155]));

var G__10156 = (i__7924__auto___10155 + (1));
i__7924__auto___10155 = G__10156;
continue;
} else {
}
break;
}

var argseq__7931__auto__ = ((((1) < args__7930__auto__.length))?(new cljs.core.IndexedSeq(args__7930__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7931__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__10151){
var map__10152 = p__10151;
var map__10152__$1 = ((((!((map__10152 == null)))?((((map__10152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10152.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10152):map__10152);
var opts = map__10152__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq10149){
var G__10150 = cljs.core.first.call(null,seq10149);
var seq10149__$1 = cljs.core.next.call(null,seq10149);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10150,seq10149__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args10157 = [];
var len__7923__auto___10207 = arguments.length;
var i__7924__auto___10208 = (0);
while(true){
if((i__7924__auto___10208 < len__7923__auto___10207)){
args10157.push((arguments[i__7924__auto___10208]));

var G__10209 = (i__7924__auto___10208 + (1));
i__7924__auto___10208 = G__10209;
continue;
} else {
}
break;
}

var G__10159 = args10157.length;
switch (G__10159) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args10157.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__10044__auto___10211 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10044__auto___10211){
return (function (){
var f__10045__auto__ = (function (){var switch__9932__auto__ = ((function (c__10044__auto___10211){
return (function (state_10183){
var state_val_10184 = (state_10183[(1)]);
if((state_val_10184 === (7))){
var inst_10179 = (state_10183[(2)]);
var state_10183__$1 = state_10183;
var statearr_10185_10212 = state_10183__$1;
(statearr_10185_10212[(2)] = inst_10179);

(statearr_10185_10212[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10184 === (1))){
var state_10183__$1 = state_10183;
var statearr_10186_10213 = state_10183__$1;
(statearr_10186_10213[(2)] = null);

(statearr_10186_10213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10184 === (4))){
var inst_10162 = (state_10183[(7)]);
var inst_10162__$1 = (state_10183[(2)]);
var inst_10163 = (inst_10162__$1 == null);
var state_10183__$1 = (function (){var statearr_10187 = state_10183;
(statearr_10187[(7)] = inst_10162__$1);

return statearr_10187;
})();
if(cljs.core.truth_(inst_10163)){
var statearr_10188_10214 = state_10183__$1;
(statearr_10188_10214[(1)] = (5));

} else {
var statearr_10189_10215 = state_10183__$1;
(statearr_10189_10215[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10184 === (13))){
var state_10183__$1 = state_10183;
var statearr_10190_10216 = state_10183__$1;
(statearr_10190_10216[(2)] = null);

(statearr_10190_10216[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10184 === (6))){
var inst_10162 = (state_10183[(7)]);
var state_10183__$1 = state_10183;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10183__$1,(11),to,inst_10162);
} else {
if((state_val_10184 === (3))){
var inst_10181 = (state_10183[(2)]);
var state_10183__$1 = state_10183;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10183__$1,inst_10181);
} else {
if((state_val_10184 === (12))){
var state_10183__$1 = state_10183;
var statearr_10191_10217 = state_10183__$1;
(statearr_10191_10217[(2)] = null);

(statearr_10191_10217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10184 === (2))){
var state_10183__$1 = state_10183;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10183__$1,(4),from);
} else {
if((state_val_10184 === (11))){
var inst_10172 = (state_10183[(2)]);
var state_10183__$1 = state_10183;
if(cljs.core.truth_(inst_10172)){
var statearr_10192_10218 = state_10183__$1;
(statearr_10192_10218[(1)] = (12));

} else {
var statearr_10193_10219 = state_10183__$1;
(statearr_10193_10219[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10184 === (9))){
var state_10183__$1 = state_10183;
var statearr_10194_10220 = state_10183__$1;
(statearr_10194_10220[(2)] = null);

(statearr_10194_10220[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10184 === (5))){
var state_10183__$1 = state_10183;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10195_10221 = state_10183__$1;
(statearr_10195_10221[(1)] = (8));

} else {
var statearr_10196_10222 = state_10183__$1;
(statearr_10196_10222[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10184 === (14))){
var inst_10177 = (state_10183[(2)]);
var state_10183__$1 = state_10183;
var statearr_10197_10223 = state_10183__$1;
(statearr_10197_10223[(2)] = inst_10177);

(statearr_10197_10223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10184 === (10))){
var inst_10169 = (state_10183[(2)]);
var state_10183__$1 = state_10183;
var statearr_10198_10224 = state_10183__$1;
(statearr_10198_10224[(2)] = inst_10169);

(statearr_10198_10224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10184 === (8))){
var inst_10166 = cljs.core.async.close_BANG_.call(null,to);
var state_10183__$1 = state_10183;
var statearr_10199_10225 = state_10183__$1;
(statearr_10199_10225[(2)] = inst_10166);

(statearr_10199_10225[(1)] = (10));


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
});})(c__10044__auto___10211))
;
return ((function (switch__9932__auto__,c__10044__auto___10211){
return (function() {
var cljs$core$async$state_machine__9933__auto__ = null;
var cljs$core$async$state_machine__9933__auto____0 = (function (){
var statearr_10203 = [null,null,null,null,null,null,null,null];
(statearr_10203[(0)] = cljs$core$async$state_machine__9933__auto__);

(statearr_10203[(1)] = (1));

return statearr_10203;
});
var cljs$core$async$state_machine__9933__auto____1 = (function (state_10183){
while(true){
var ret_value__9934__auto__ = (function (){try{while(true){
var result__9935__auto__ = switch__9932__auto__.call(null,state_10183);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9935__auto__;
}
break;
}
}catch (e10204){if((e10204 instanceof Object)){
var ex__9936__auto__ = e10204;
var statearr_10205_10226 = state_10183;
(statearr_10205_10226[(5)] = ex__9936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10183);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10204;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10227 = state_10183;
state_10183 = G__10227;
continue;
} else {
return ret_value__9934__auto__;
}
break;
}
});
cljs$core$async$state_machine__9933__auto__ = function(state_10183){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9933__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9933__auto____1.call(this,state_10183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9933__auto____0;
cljs$core$async$state_machine__9933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9933__auto____1;
return cljs$core$async$state_machine__9933__auto__;
})()
;})(switch__9932__auto__,c__10044__auto___10211))
})();
var state__10046__auto__ = (function (){var statearr_10206 = f__10045__auto__.call(null);
(statearr_10206[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10044__auto___10211);

return statearr_10206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10046__auto__);
});})(c__10044__auto___10211))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__10415){
var vec__10416 = p__10415;
var v = cljs.core.nth.call(null,vec__10416,(0),null);
var p = cljs.core.nth.call(null,vec__10416,(1),null);
var job = vec__10416;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__10044__auto___10602 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10044__auto___10602,res,vec__10416,v,p,job,jobs,results){
return (function (){
var f__10045__auto__ = (function (){var switch__9932__auto__ = ((function (c__10044__auto___10602,res,vec__10416,v,p,job,jobs,results){
return (function (state_10423){
var state_val_10424 = (state_10423[(1)]);
if((state_val_10424 === (1))){
var state_10423__$1 = state_10423;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10423__$1,(2),res,v);
} else {
if((state_val_10424 === (2))){
var inst_10420 = (state_10423[(2)]);
var inst_10421 = cljs.core.async.close_BANG_.call(null,res);
var state_10423__$1 = (function (){var statearr_10425 = state_10423;
(statearr_10425[(7)] = inst_10420);

return statearr_10425;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10423__$1,inst_10421);
} else {
return null;
}
}
});})(c__10044__auto___10602,res,vec__10416,v,p,job,jobs,results))
;
return ((function (switch__9932__auto__,c__10044__auto___10602,res,vec__10416,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9933__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9933__auto____0 = (function (){
var statearr_10429 = [null,null,null,null,null,null,null,null];
(statearr_10429[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9933__auto__);

(statearr_10429[(1)] = (1));

return statearr_10429;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9933__auto____1 = (function (state_10423){
while(true){
var ret_value__9934__auto__ = (function (){try{while(true){
var result__9935__auto__ = switch__9932__auto__.call(null,state_10423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9935__auto__;
}
break;
}
}catch (e10430){if((e10430 instanceof Object)){
var ex__9936__auto__ = e10430;
var statearr_10431_10603 = state_10423;
(statearr_10431_10603[(5)] = ex__9936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10430;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10604 = state_10423;
state_10423 = G__10604;
continue;
} else {
return ret_value__9934__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9933__auto__ = function(state_10423){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9933__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9933__auto____1.call(this,state_10423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9933__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9933__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9933__auto__;
})()
;})(switch__9932__auto__,c__10044__auto___10602,res,vec__10416,v,p,job,jobs,results))
})();
var state__10046__auto__ = (function (){var statearr_10432 = f__10045__auto__.call(null);
(statearr_10432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10044__auto___10602);

return statearr_10432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10046__auto__);
});})(c__10044__auto___10602,res,vec__10416,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__10433){
var vec__10434 = p__10433;
var v = cljs.core.nth.call(null,vec__10434,(0),null);
var p = cljs.core.nth.call(null,vec__10434,(1),null);
var job = vec__10434;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__7737__auto___10605 = n;
var __10606 = (0);
while(true){
if((__10606 < n__7737__auto___10605)){
var G__10437_10607 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__10437_10607) {
case "compute":
var c__10044__auto___10609 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__10606,c__10044__auto___10609,G__10437_10607,n__7737__auto___10605,jobs,results,process,async){
return (function (){
var f__10045__auto__ = (function (){var switch__9932__auto__ = ((function (__10606,c__10044__auto___10609,G__10437_10607,n__7737__auto___10605,jobs,results,process,async){
return (function (state_10450){
var state_val_10451 = (state_10450[(1)]);
if((state_val_10451 === (1))){
var state_10450__$1 = state_10450;
var statearr_10452_10610 = state_10450__$1;
(statearr_10452_10610[(2)] = null);

(statearr_10452_10610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10451 === (2))){
var state_10450__$1 = state_10450;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10450__$1,(4),jobs);
} else {
if((state_val_10451 === (3))){
var inst_10448 = (state_10450[(2)]);
var state_10450__$1 = state_10450;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10450__$1,inst_10448);
} else {
if((state_val_10451 === (4))){
var inst_10440 = (state_10450[(2)]);
var inst_10441 = process.call(null,inst_10440);
var state_10450__$1 = state_10450;
if(cljs.core.truth_(inst_10441)){
var statearr_10453_10611 = state_10450__$1;
(statearr_10453_10611[(1)] = (5));

} else {
var statearr_10454_10612 = state_10450__$1;
(statearr_10454_10612[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10451 === (5))){
var state_10450__$1 = state_10450;
var statearr_10455_10613 = state_10450__$1;
(statearr_10455_10613[(2)] = null);

(statearr_10455_10613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10451 === (6))){
var state_10450__$1 = state_10450;
var statearr_10456_10614 = state_10450__$1;
(statearr_10456_10614[(2)] = null);

(statearr_10456_10614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10451 === (7))){
var inst_10446 = (state_10450[(2)]);
var state_10450__$1 = state_10450;
var statearr_10457_10615 = state_10450__$1;
(statearr_10457_10615[(2)] = inst_10446);

(statearr_10457_10615[(1)] = (3));


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
});})(__10606,c__10044__auto___10609,G__10437_10607,n__7737__auto___10605,jobs,results,process,async))
;
return ((function (__10606,switch__9932__auto__,c__10044__auto___10609,G__10437_10607,n__7737__auto___10605,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9933__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9933__auto____0 = (function (){
var statearr_10461 = [null,null,null,null,null,null,null];
(statearr_10461[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9933__auto__);

(statearr_10461[(1)] = (1));

return statearr_10461;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9933__auto____1 = (function (state_10450){
while(true){
var ret_value__9934__auto__ = (function (){try{while(true){
var result__9935__auto__ = switch__9932__auto__.call(null,state_10450);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9935__auto__;
}
break;
}
}catch (e10462){if((e10462 instanceof Object)){
var ex__9936__auto__ = e10462;
var statearr_10463_10616 = state_10450;
(statearr_10463_10616[(5)] = ex__9936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10450);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10462;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10617 = state_10450;
state_10450 = G__10617;
continue;
} else {
return ret_value__9934__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9933__auto__ = function(state_10450){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9933__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9933__auto____1.call(this,state_10450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9933__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9933__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9933__auto__;
})()
;})(__10606,switch__9932__auto__,c__10044__auto___10609,G__10437_10607,n__7737__auto___10605,jobs,results,process,async))
})();
var state__10046__auto__ = (function (){var statearr_10464 = f__10045__auto__.call(null);
(statearr_10464[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10044__auto___10609);

return statearr_10464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10046__auto__);
});})(__10606,c__10044__auto___10609,G__10437_10607,n__7737__auto___10605,jobs,results,process,async))
);


break;
case "async":
var c__10044__auto___10618 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__10606,c__10044__auto___10618,G__10437_10607,n__7737__auto___10605,jobs,results,process,async){
return (function (){
var f__10045__auto__ = (function (){var switch__9932__auto__ = ((function (__10606,c__10044__auto___10618,G__10437_10607,n__7737__auto___10605,jobs,results,process,async){
return (function (state_10477){
var state_val_10478 = (state_10477[(1)]);
if((state_val_10478 === (1))){
var state_10477__$1 = state_10477;
var statearr_10479_10619 = state_10477__$1;
(statearr_10479_10619[(2)] = null);

(statearr_10479_10619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10478 === (2))){
var state_10477__$1 = state_10477;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10477__$1,(4),jobs);
} else {
if((state_val_10478 === (3))){
var inst_10475 = (state_10477[(2)]);
var state_10477__$1 = state_10477;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10477__$1,inst_10475);
} else {
if((state_val_10478 === (4))){
var inst_10467 = (state_10477[(2)]);
var inst_10468 = async.call(null,inst_10467);
var state_10477__$1 = state_10477;
if(cljs.core.truth_(inst_10468)){
var statearr_10480_10620 = state_10477__$1;
(statearr_10480_10620[(1)] = (5));

} else {
var statearr_10481_10621 = state_10477__$1;
(statearr_10481_10621[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10478 === (5))){
var state_10477__$1 = state_10477;
var statearr_10482_10622 = state_10477__$1;
(statearr_10482_10622[(2)] = null);

(statearr_10482_10622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10478 === (6))){
var state_10477__$1 = state_10477;
var statearr_10483_10623 = state_10477__$1;
(statearr_10483_10623[(2)] = null);

(statearr_10483_10623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10478 === (7))){
var inst_10473 = (state_10477[(2)]);
var state_10477__$1 = state_10477;
var statearr_10484_10624 = state_10477__$1;
(statearr_10484_10624[(2)] = inst_10473);

(statearr_10484_10624[(1)] = (3));


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
});})(__10606,c__10044__auto___10618,G__10437_10607,n__7737__auto___10605,jobs,results,process,async))
;
return ((function (__10606,switch__9932__auto__,c__10044__auto___10618,G__10437_10607,n__7737__auto___10605,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9933__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9933__auto____0 = (function (){
var statearr_10488 = [null,null,null,null,null,null,null];
(statearr_10488[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9933__auto__);

(statearr_10488[(1)] = (1));

return statearr_10488;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9933__auto____1 = (function (state_10477){
while(true){
var ret_value__9934__auto__ = (function (){try{while(true){
var result__9935__auto__ = switch__9932__auto__.call(null,state_10477);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9935__auto__;
}
break;
}
}catch (e10489){if((e10489 instanceof Object)){
var ex__9936__auto__ = e10489;
var statearr_10490_10625 = state_10477;
(statearr_10490_10625[(5)] = ex__9936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10489;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10626 = state_10477;
state_10477 = G__10626;
continue;
} else {
return ret_value__9934__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9933__auto__ = function(state_10477){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9933__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9933__auto____1.call(this,state_10477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9933__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9933__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9933__auto__;
})()
;})(__10606,switch__9932__auto__,c__10044__auto___10618,G__10437_10607,n__7737__auto___10605,jobs,results,process,async))
})();
var state__10046__auto__ = (function (){var statearr_10491 = f__10045__auto__.call(null);
(statearr_10491[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10044__auto___10618);

return statearr_10491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10046__auto__);
});})(__10606,c__10044__auto___10618,G__10437_10607,n__7737__auto___10605,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__10627 = (__10606 + (1));
__10606 = G__10627;
continue;
} else {
}
break;
}

var c__10044__auto___10628 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10044__auto___10628,jobs,results,process,async){
return (function (){
var f__10045__auto__ = (function (){var switch__9932__auto__ = ((function (c__10044__auto___10628,jobs,results,process,async){
return (function (state_10513){
var state_val_10514 = (state_10513[(1)]);
if((state_val_10514 === (1))){
var state_10513__$1 = state_10513;
var statearr_10515_10629 = state_10513__$1;
(statearr_10515_10629[(2)] = null);

(statearr_10515_10629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10514 === (2))){
var state_10513__$1 = state_10513;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10513__$1,(4),from);
} else {
if((state_val_10514 === (3))){
var inst_10511 = (state_10513[(2)]);
var state_10513__$1 = state_10513;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10513__$1,inst_10511);
} else {
if((state_val_10514 === (4))){
var inst_10494 = (state_10513[(7)]);
var inst_10494__$1 = (state_10513[(2)]);
var inst_10495 = (inst_10494__$1 == null);
var state_10513__$1 = (function (){var statearr_10516 = state_10513;
(statearr_10516[(7)] = inst_10494__$1);

return statearr_10516;
})();
if(cljs.core.truth_(inst_10495)){
var statearr_10517_10630 = state_10513__$1;
(statearr_10517_10630[(1)] = (5));

} else {
var statearr_10518_10631 = state_10513__$1;
(statearr_10518_10631[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10514 === (5))){
var inst_10497 = cljs.core.async.close_BANG_.call(null,jobs);
var state_10513__$1 = state_10513;
var statearr_10519_10632 = state_10513__$1;
(statearr_10519_10632[(2)] = inst_10497);

(statearr_10519_10632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10514 === (6))){
var inst_10494 = (state_10513[(7)]);
var inst_10499 = (state_10513[(8)]);
var inst_10499__$1 = cljs.core.async.chan.call(null,(1));
var inst_10500 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10501 = [inst_10494,inst_10499__$1];
var inst_10502 = (new cljs.core.PersistentVector(null,2,(5),inst_10500,inst_10501,null));
var state_10513__$1 = (function (){var statearr_10520 = state_10513;
(statearr_10520[(8)] = inst_10499__$1);

return statearr_10520;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10513__$1,(8),jobs,inst_10502);
} else {
if((state_val_10514 === (7))){
var inst_10509 = (state_10513[(2)]);
var state_10513__$1 = state_10513;
var statearr_10521_10633 = state_10513__$1;
(statearr_10521_10633[(2)] = inst_10509);

(statearr_10521_10633[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10514 === (8))){
var inst_10499 = (state_10513[(8)]);
var inst_10504 = (state_10513[(2)]);
var state_10513__$1 = (function (){var statearr_10522 = state_10513;
(statearr_10522[(9)] = inst_10504);

return statearr_10522;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10513__$1,(9),results,inst_10499);
} else {
if((state_val_10514 === (9))){
var inst_10506 = (state_10513[(2)]);
var state_10513__$1 = (function (){var statearr_10523 = state_10513;
(statearr_10523[(10)] = inst_10506);

return statearr_10523;
})();
var statearr_10524_10634 = state_10513__$1;
(statearr_10524_10634[(2)] = null);

(statearr_10524_10634[(1)] = (2));


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
});})(c__10044__auto___10628,jobs,results,process,async))
;
return ((function (switch__9932__auto__,c__10044__auto___10628,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9933__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9933__auto____0 = (function (){
var statearr_10528 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10528[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9933__auto__);

(statearr_10528[(1)] = (1));

return statearr_10528;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9933__auto____1 = (function (state_10513){
while(true){
var ret_value__9934__auto__ = (function (){try{while(true){
var result__9935__auto__ = switch__9932__auto__.call(null,state_10513);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9935__auto__;
}
break;
}
}catch (e10529){if((e10529 instanceof Object)){
var ex__9936__auto__ = e10529;
var statearr_10530_10635 = state_10513;
(statearr_10530_10635[(5)] = ex__9936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10513);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10529;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10636 = state_10513;
state_10513 = G__10636;
continue;
} else {
return ret_value__9934__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9933__auto__ = function(state_10513){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9933__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9933__auto____1.call(this,state_10513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9933__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9933__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9933__auto__;
})()
;})(switch__9932__auto__,c__10044__auto___10628,jobs,results,process,async))
})();
var state__10046__auto__ = (function (){var statearr_10531 = f__10045__auto__.call(null);
(statearr_10531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10044__auto___10628);

return statearr_10531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10046__auto__);
});})(c__10044__auto___10628,jobs,results,process,async))
);


var c__10044__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10044__auto__,jobs,results,process,async){
return (function (){
var f__10045__auto__ = (function (){var switch__9932__auto__ = ((function (c__10044__auto__,jobs,results,process,async){
return (function (state_10569){
var state_val_10570 = (state_10569[(1)]);
if((state_val_10570 === (7))){
var inst_10565 = (state_10569[(2)]);
var state_10569__$1 = state_10569;
var statearr_10571_10637 = state_10569__$1;
(statearr_10571_10637[(2)] = inst_10565);

(statearr_10571_10637[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10570 === (20))){
var state_10569__$1 = state_10569;
var statearr_10572_10638 = state_10569__$1;
(statearr_10572_10638[(2)] = null);

(statearr_10572_10638[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10570 === (1))){
var state_10569__$1 = state_10569;
var statearr_10573_10639 = state_10569__$1;
(statearr_10573_10639[(2)] = null);

(statearr_10573_10639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10570 === (4))){
var inst_10534 = (state_10569[(7)]);
var inst_10534__$1 = (state_10569[(2)]);
var inst_10535 = (inst_10534__$1 == null);
var state_10569__$1 = (function (){var statearr_10574 = state_10569;
(statearr_10574[(7)] = inst_10534__$1);

return statearr_10574;
})();
if(cljs.core.truth_(inst_10535)){
var statearr_10575_10640 = state_10569__$1;
(statearr_10575_10640[(1)] = (5));

} else {
var statearr_10576_10641 = state_10569__$1;
(statearr_10576_10641[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10570 === (15))){
var inst_10547 = (state_10569[(8)]);
var state_10569__$1 = state_10569;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10569__$1,(18),to,inst_10547);
} else {
if((state_val_10570 === (21))){
var inst_10560 = (state_10569[(2)]);
var state_10569__$1 = state_10569;
var statearr_10577_10642 = state_10569__$1;
(statearr_10577_10642[(2)] = inst_10560);

(statearr_10577_10642[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10570 === (13))){
var inst_10562 = (state_10569[(2)]);
var state_10569__$1 = (function (){var statearr_10578 = state_10569;
(statearr_10578[(9)] = inst_10562);

return statearr_10578;
})();
var statearr_10579_10643 = state_10569__$1;
(statearr_10579_10643[(2)] = null);

(statearr_10579_10643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10570 === (6))){
var inst_10534 = (state_10569[(7)]);
var state_10569__$1 = state_10569;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10569__$1,(11),inst_10534);
} else {
if((state_val_10570 === (17))){
var inst_10555 = (state_10569[(2)]);
var state_10569__$1 = state_10569;
if(cljs.core.truth_(inst_10555)){
var statearr_10580_10644 = state_10569__$1;
(statearr_10580_10644[(1)] = (19));

} else {
var statearr_10581_10645 = state_10569__$1;
(statearr_10581_10645[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10570 === (3))){
var inst_10567 = (state_10569[(2)]);
var state_10569__$1 = state_10569;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10569__$1,inst_10567);
} else {
if((state_val_10570 === (12))){
var inst_10544 = (state_10569[(10)]);
var state_10569__$1 = state_10569;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10569__$1,(14),inst_10544);
} else {
if((state_val_10570 === (2))){
var state_10569__$1 = state_10569;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10569__$1,(4),results);
} else {
if((state_val_10570 === (19))){
var state_10569__$1 = state_10569;
var statearr_10582_10646 = state_10569__$1;
(statearr_10582_10646[(2)] = null);

(statearr_10582_10646[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10570 === (11))){
var inst_10544 = (state_10569[(2)]);
var state_10569__$1 = (function (){var statearr_10583 = state_10569;
(statearr_10583[(10)] = inst_10544);

return statearr_10583;
})();
var statearr_10584_10647 = state_10569__$1;
(statearr_10584_10647[(2)] = null);

(statearr_10584_10647[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10570 === (9))){
var state_10569__$1 = state_10569;
var statearr_10585_10648 = state_10569__$1;
(statearr_10585_10648[(2)] = null);

(statearr_10585_10648[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10570 === (5))){
var state_10569__$1 = state_10569;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10586_10649 = state_10569__$1;
(statearr_10586_10649[(1)] = (8));

} else {
var statearr_10587_10650 = state_10569__$1;
(statearr_10587_10650[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10570 === (14))){
var inst_10549 = (state_10569[(11)]);
var inst_10547 = (state_10569[(8)]);
var inst_10547__$1 = (state_10569[(2)]);
var inst_10548 = (inst_10547__$1 == null);
var inst_10549__$1 = cljs.core.not.call(null,inst_10548);
var state_10569__$1 = (function (){var statearr_10588 = state_10569;
(statearr_10588[(11)] = inst_10549__$1);

(statearr_10588[(8)] = inst_10547__$1);

return statearr_10588;
})();
if(inst_10549__$1){
var statearr_10589_10651 = state_10569__$1;
(statearr_10589_10651[(1)] = (15));

} else {
var statearr_10590_10652 = state_10569__$1;
(statearr_10590_10652[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10570 === (16))){
var inst_10549 = (state_10569[(11)]);
var state_10569__$1 = state_10569;
var statearr_10591_10653 = state_10569__$1;
(statearr_10591_10653[(2)] = inst_10549);

(statearr_10591_10653[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10570 === (10))){
var inst_10541 = (state_10569[(2)]);
var state_10569__$1 = state_10569;
var statearr_10592_10654 = state_10569__$1;
(statearr_10592_10654[(2)] = inst_10541);

(statearr_10592_10654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10570 === (18))){
var inst_10552 = (state_10569[(2)]);
var state_10569__$1 = state_10569;
var statearr_10593_10655 = state_10569__$1;
(statearr_10593_10655[(2)] = inst_10552);

(statearr_10593_10655[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10570 === (8))){
var inst_10538 = cljs.core.async.close_BANG_.call(null,to);
var state_10569__$1 = state_10569;
var statearr_10594_10656 = state_10569__$1;
(statearr_10594_10656[(2)] = inst_10538);

(statearr_10594_10656[(1)] = (10));


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
});})(c__10044__auto__,jobs,results,process,async))
;
return ((function (switch__9932__auto__,c__10044__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9933__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9933__auto____0 = (function (){
var statearr_10598 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10598[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9933__auto__);

(statearr_10598[(1)] = (1));

return statearr_10598;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9933__auto____1 = (function (state_10569){
while(true){
var ret_value__9934__auto__ = (function (){try{while(true){
var result__9935__auto__ = switch__9932__auto__.call(null,state_10569);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9935__auto__;
}
break;
}
}catch (e10599){if((e10599 instanceof Object)){
var ex__9936__auto__ = e10599;
var statearr_10600_10657 = state_10569;
(statearr_10600_10657[(5)] = ex__9936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10569);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10599;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10658 = state_10569;
state_10569 = G__10658;
continue;
} else {
return ret_value__9934__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9933__auto__ = function(state_10569){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9933__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9933__auto____1.call(this,state_10569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9933__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9933__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9933__auto__;
})()
;})(switch__9932__auto__,c__10044__auto__,jobs,results,process,async))
})();
var state__10046__auto__ = (function (){var statearr_10601 = f__10045__auto__.call(null);
(statearr_10601[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10044__auto__);

return statearr_10601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10046__auto__);
});})(c__10044__auto__,jobs,results,process,async))
);

return c__10044__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args10659 = [];
var len__7923__auto___10662 = arguments.length;
var i__7924__auto___10663 = (0);
while(true){
if((i__7924__auto___10663 < len__7923__auto___10662)){
args10659.push((arguments[i__7924__auto___10663]));

var G__10664 = (i__7924__auto___10663 + (1));
i__7924__auto___10663 = G__10664;
continue;
} else {
}
break;
}

var G__10661 = args10659.length;
switch (G__10661) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args10659.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args10666 = [];
var len__7923__auto___10669 = arguments.length;
var i__7924__auto___10670 = (0);
while(true){
if((i__7924__auto___10670 < len__7923__auto___10669)){
args10666.push((arguments[i__7924__auto___10670]));

var G__10671 = (i__7924__auto___10670 + (1));
i__7924__auto___10670 = G__10671;
continue;
} else {
}
break;
}

var G__10668 = args10666.length;
switch (G__10668) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args10666.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args10673 = [];
var len__7923__auto___10726 = arguments.length;
var i__7924__auto___10727 = (0);
while(true){
if((i__7924__auto___10727 < len__7923__auto___10726)){
args10673.push((arguments[i__7924__auto___10727]));

var G__10728 = (i__7924__auto___10727 + (1));
i__7924__auto___10727 = G__10728;
continue;
} else {
}
break;
}

var G__10675 = args10673.length;
switch (G__10675) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args10673.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__10044__auto___10730 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10044__auto___10730,tc,fc){
return (function (){
var f__10045__auto__ = (function (){var switch__9932__auto__ = ((function (c__10044__auto___10730,tc,fc){
return (function (state_10701){
var state_val_10702 = (state_10701[(1)]);
if((state_val_10702 === (7))){
var inst_10697 = (state_10701[(2)]);
var state_10701__$1 = state_10701;
var statearr_10703_10731 = state_10701__$1;
(statearr_10703_10731[(2)] = inst_10697);

(statearr_10703_10731[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10702 === (1))){
var state_10701__$1 = state_10701;
var statearr_10704_10732 = state_10701__$1;
(statearr_10704_10732[(2)] = null);

(statearr_10704_10732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10702 === (4))){
var inst_10678 = (state_10701[(7)]);
var inst_10678__$1 = (state_10701[(2)]);
var inst_10679 = (inst_10678__$1 == null);
var state_10701__$1 = (function (){var statearr_10705 = state_10701;
(statearr_10705[(7)] = inst_10678__$1);

return statearr_10705;
})();
if(cljs.core.truth_(inst_10679)){
var statearr_10706_10733 = state_10701__$1;
(statearr_10706_10733[(1)] = (5));

} else {
var statearr_10707_10734 = state_10701__$1;
(statearr_10707_10734[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10702 === (13))){
var state_10701__$1 = state_10701;
var statearr_10708_10735 = state_10701__$1;
(statearr_10708_10735[(2)] = null);

(statearr_10708_10735[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10702 === (6))){
var inst_10678 = (state_10701[(7)]);
var inst_10684 = p.call(null,inst_10678);
var state_10701__$1 = state_10701;
if(cljs.core.truth_(inst_10684)){
var statearr_10709_10736 = state_10701__$1;
(statearr_10709_10736[(1)] = (9));

} else {
var statearr_10710_10737 = state_10701__$1;
(statearr_10710_10737[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10702 === (3))){
var inst_10699 = (state_10701[(2)]);
var state_10701__$1 = state_10701;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10701__$1,inst_10699);
} else {
if((state_val_10702 === (12))){
var state_10701__$1 = state_10701;
var statearr_10711_10738 = state_10701__$1;
(statearr_10711_10738[(2)] = null);

(statearr_10711_10738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10702 === (2))){
var state_10701__$1 = state_10701;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10701__$1,(4),ch);
} else {
if((state_val_10702 === (11))){
var inst_10678 = (state_10701[(7)]);
var inst_10688 = (state_10701[(2)]);
var state_10701__$1 = state_10701;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10701__$1,(8),inst_10688,inst_10678);
} else {
if((state_val_10702 === (9))){
var state_10701__$1 = state_10701;
var statearr_10712_10739 = state_10701__$1;
(statearr_10712_10739[(2)] = tc);

(statearr_10712_10739[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10702 === (5))){
var inst_10681 = cljs.core.async.close_BANG_.call(null,tc);
var inst_10682 = cljs.core.async.close_BANG_.call(null,fc);
var state_10701__$1 = (function (){var statearr_10713 = state_10701;
(statearr_10713[(8)] = inst_10681);

return statearr_10713;
})();
var statearr_10714_10740 = state_10701__$1;
(statearr_10714_10740[(2)] = inst_10682);

(statearr_10714_10740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10702 === (14))){
var inst_10695 = (state_10701[(2)]);
var state_10701__$1 = state_10701;
var statearr_10715_10741 = state_10701__$1;
(statearr_10715_10741[(2)] = inst_10695);

(statearr_10715_10741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10702 === (10))){
var state_10701__$1 = state_10701;
var statearr_10716_10742 = state_10701__$1;
(statearr_10716_10742[(2)] = fc);

(statearr_10716_10742[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10702 === (8))){
var inst_10690 = (state_10701[(2)]);
var state_10701__$1 = state_10701;
if(cljs.core.truth_(inst_10690)){
var statearr_10717_10743 = state_10701__$1;
(statearr_10717_10743[(1)] = (12));

} else {
var statearr_10718_10744 = state_10701__$1;
(statearr_10718_10744[(1)] = (13));

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
});})(c__10044__auto___10730,tc,fc))
;
return ((function (switch__9932__auto__,c__10044__auto___10730,tc,fc){
return (function() {
var cljs$core$async$state_machine__9933__auto__ = null;
var cljs$core$async$state_machine__9933__auto____0 = (function (){
var statearr_10722 = [null,null,null,null,null,null,null,null,null];
(statearr_10722[(0)] = cljs$core$async$state_machine__9933__auto__);

(statearr_10722[(1)] = (1));

return statearr_10722;
});
var cljs$core$async$state_machine__9933__auto____1 = (function (state_10701){
while(true){
var ret_value__9934__auto__ = (function (){try{while(true){
var result__9935__auto__ = switch__9932__auto__.call(null,state_10701);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9935__auto__;
}
break;
}
}catch (e10723){if((e10723 instanceof Object)){
var ex__9936__auto__ = e10723;
var statearr_10724_10745 = state_10701;
(statearr_10724_10745[(5)] = ex__9936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10701);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10723;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10746 = state_10701;
state_10701 = G__10746;
continue;
} else {
return ret_value__9934__auto__;
}
break;
}
});
cljs$core$async$state_machine__9933__auto__ = function(state_10701){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9933__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9933__auto____1.call(this,state_10701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9933__auto____0;
cljs$core$async$state_machine__9933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9933__auto____1;
return cljs$core$async$state_machine__9933__auto__;
})()
;})(switch__9932__auto__,c__10044__auto___10730,tc,fc))
})();
var state__10046__auto__ = (function (){var statearr_10725 = f__10045__auto__.call(null);
(statearr_10725[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10044__auto___10730);

return statearr_10725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10046__auto__);
});})(c__10044__auto___10730,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__10044__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10044__auto__){
return (function (){
var f__10045__auto__ = (function (){var switch__9932__auto__ = ((function (c__10044__auto__){
return (function (state_10810){
var state_val_10811 = (state_10810[(1)]);
if((state_val_10811 === (7))){
var inst_10806 = (state_10810[(2)]);
var state_10810__$1 = state_10810;
var statearr_10812_10833 = state_10810__$1;
(statearr_10812_10833[(2)] = inst_10806);

(statearr_10812_10833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10811 === (1))){
var inst_10790 = init;
var state_10810__$1 = (function (){var statearr_10813 = state_10810;
(statearr_10813[(7)] = inst_10790);

return statearr_10813;
})();
var statearr_10814_10834 = state_10810__$1;
(statearr_10814_10834[(2)] = null);

(statearr_10814_10834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10811 === (4))){
var inst_10793 = (state_10810[(8)]);
var inst_10793__$1 = (state_10810[(2)]);
var inst_10794 = (inst_10793__$1 == null);
var state_10810__$1 = (function (){var statearr_10815 = state_10810;
(statearr_10815[(8)] = inst_10793__$1);

return statearr_10815;
})();
if(cljs.core.truth_(inst_10794)){
var statearr_10816_10835 = state_10810__$1;
(statearr_10816_10835[(1)] = (5));

} else {
var statearr_10817_10836 = state_10810__$1;
(statearr_10817_10836[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10811 === (6))){
var inst_10793 = (state_10810[(8)]);
var inst_10797 = (state_10810[(9)]);
var inst_10790 = (state_10810[(7)]);
var inst_10797__$1 = f.call(null,inst_10790,inst_10793);
var inst_10798 = cljs.core.reduced_QMARK_.call(null,inst_10797__$1);
var state_10810__$1 = (function (){var statearr_10818 = state_10810;
(statearr_10818[(9)] = inst_10797__$1);

return statearr_10818;
})();
if(inst_10798){
var statearr_10819_10837 = state_10810__$1;
(statearr_10819_10837[(1)] = (8));

} else {
var statearr_10820_10838 = state_10810__$1;
(statearr_10820_10838[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10811 === (3))){
var inst_10808 = (state_10810[(2)]);
var state_10810__$1 = state_10810;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10810__$1,inst_10808);
} else {
if((state_val_10811 === (2))){
var state_10810__$1 = state_10810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10810__$1,(4),ch);
} else {
if((state_val_10811 === (9))){
var inst_10797 = (state_10810[(9)]);
var inst_10790 = inst_10797;
var state_10810__$1 = (function (){var statearr_10821 = state_10810;
(statearr_10821[(7)] = inst_10790);

return statearr_10821;
})();
var statearr_10822_10839 = state_10810__$1;
(statearr_10822_10839[(2)] = null);

(statearr_10822_10839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10811 === (5))){
var inst_10790 = (state_10810[(7)]);
var state_10810__$1 = state_10810;
var statearr_10823_10840 = state_10810__$1;
(statearr_10823_10840[(2)] = inst_10790);

(statearr_10823_10840[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10811 === (10))){
var inst_10804 = (state_10810[(2)]);
var state_10810__$1 = state_10810;
var statearr_10824_10841 = state_10810__$1;
(statearr_10824_10841[(2)] = inst_10804);

(statearr_10824_10841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10811 === (8))){
var inst_10797 = (state_10810[(9)]);
var inst_10800 = cljs.core.deref.call(null,inst_10797);
var state_10810__$1 = state_10810;
var statearr_10825_10842 = state_10810__$1;
(statearr_10825_10842[(2)] = inst_10800);

(statearr_10825_10842[(1)] = (10));


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
});})(c__10044__auto__))
;
return ((function (switch__9932__auto__,c__10044__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__9933__auto__ = null;
var cljs$core$async$reduce_$_state_machine__9933__auto____0 = (function (){
var statearr_10829 = [null,null,null,null,null,null,null,null,null,null];
(statearr_10829[(0)] = cljs$core$async$reduce_$_state_machine__9933__auto__);

(statearr_10829[(1)] = (1));

return statearr_10829;
});
var cljs$core$async$reduce_$_state_machine__9933__auto____1 = (function (state_10810){
while(true){
var ret_value__9934__auto__ = (function (){try{while(true){
var result__9935__auto__ = switch__9932__auto__.call(null,state_10810);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9935__auto__;
}
break;
}
}catch (e10830){if((e10830 instanceof Object)){
var ex__9936__auto__ = e10830;
var statearr_10831_10843 = state_10810;
(statearr_10831_10843[(5)] = ex__9936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10810);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10830;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10844 = state_10810;
state_10810 = G__10844;
continue;
} else {
return ret_value__9934__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__9933__auto__ = function(state_10810){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__9933__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__9933__auto____1.call(this,state_10810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__9933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__9933__auto____0;
cljs$core$async$reduce_$_state_machine__9933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__9933__auto____1;
return cljs$core$async$reduce_$_state_machine__9933__auto__;
})()
;})(switch__9932__auto__,c__10044__auto__))
})();
var state__10046__auto__ = (function (){var statearr_10832 = f__10045__auto__.call(null);
(statearr_10832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10044__auto__);

return statearr_10832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10046__auto__);
});})(c__10044__auto__))
);

return c__10044__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__10044__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10044__auto__,f__$1){
return (function (){
var f__10045__auto__ = (function (){var switch__9932__auto__ = ((function (c__10044__auto__,f__$1){
return (function (state_10864){
var state_val_10865 = (state_10864[(1)]);
if((state_val_10865 === (1))){
var inst_10859 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_10864__$1 = state_10864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10864__$1,(2),inst_10859);
} else {
if((state_val_10865 === (2))){
var inst_10861 = (state_10864[(2)]);
var inst_10862 = f__$1.call(null,inst_10861);
var state_10864__$1 = state_10864;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10864__$1,inst_10862);
} else {
return null;
}
}
});})(c__10044__auto__,f__$1))
;
return ((function (switch__9932__auto__,c__10044__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__9933__auto__ = null;
var cljs$core$async$transduce_$_state_machine__9933__auto____0 = (function (){
var statearr_10869 = [null,null,null,null,null,null,null];
(statearr_10869[(0)] = cljs$core$async$transduce_$_state_machine__9933__auto__);

(statearr_10869[(1)] = (1));

return statearr_10869;
});
var cljs$core$async$transduce_$_state_machine__9933__auto____1 = (function (state_10864){
while(true){
var ret_value__9934__auto__ = (function (){try{while(true){
var result__9935__auto__ = switch__9932__auto__.call(null,state_10864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9935__auto__;
}
break;
}
}catch (e10870){if((e10870 instanceof Object)){
var ex__9936__auto__ = e10870;
var statearr_10871_10873 = state_10864;
(statearr_10871_10873[(5)] = ex__9936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10870;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10874 = state_10864;
state_10864 = G__10874;
continue;
} else {
return ret_value__9934__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__9933__auto__ = function(state_10864){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__9933__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__9933__auto____1.call(this,state_10864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__9933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__9933__auto____0;
cljs$core$async$transduce_$_state_machine__9933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__9933__auto____1;
return cljs$core$async$transduce_$_state_machine__9933__auto__;
})()
;})(switch__9932__auto__,c__10044__auto__,f__$1))
})();
var state__10046__auto__ = (function (){var statearr_10872 = f__10045__auto__.call(null);
(statearr_10872[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10044__auto__);

return statearr_10872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10046__auto__);
});})(c__10044__auto__,f__$1))
);

return c__10044__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args10875 = [];
var len__7923__auto___10927 = arguments.length;
var i__7924__auto___10928 = (0);
while(true){
if((i__7924__auto___10928 < len__7923__auto___10927)){
args10875.push((arguments[i__7924__auto___10928]));

var G__10929 = (i__7924__auto___10928 + (1));
i__7924__auto___10928 = G__10929;
continue;
} else {
}
break;
}

var G__10877 = args10875.length;
switch (G__10877) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args10875.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__10044__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10044__auto__){
return (function (){
var f__10045__auto__ = (function (){var switch__9932__auto__ = ((function (c__10044__auto__){
return (function (state_10902){
var state_val_10903 = (state_10902[(1)]);
if((state_val_10903 === (7))){
var inst_10884 = (state_10902[(2)]);
var state_10902__$1 = state_10902;
var statearr_10904_10931 = state_10902__$1;
(statearr_10904_10931[(2)] = inst_10884);

(statearr_10904_10931[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10903 === (1))){
var inst_10878 = cljs.core.seq.call(null,coll);
var inst_10879 = inst_10878;
var state_10902__$1 = (function (){var statearr_10905 = state_10902;
(statearr_10905[(7)] = inst_10879);

return statearr_10905;
})();
var statearr_10906_10932 = state_10902__$1;
(statearr_10906_10932[(2)] = null);

(statearr_10906_10932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10903 === (4))){
var inst_10879 = (state_10902[(7)]);
var inst_10882 = cljs.core.first.call(null,inst_10879);
var state_10902__$1 = state_10902;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10902__$1,(7),ch,inst_10882);
} else {
if((state_val_10903 === (13))){
var inst_10896 = (state_10902[(2)]);
var state_10902__$1 = state_10902;
var statearr_10907_10933 = state_10902__$1;
(statearr_10907_10933[(2)] = inst_10896);

(statearr_10907_10933[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10903 === (6))){
var inst_10887 = (state_10902[(2)]);
var state_10902__$1 = state_10902;
if(cljs.core.truth_(inst_10887)){
var statearr_10908_10934 = state_10902__$1;
(statearr_10908_10934[(1)] = (8));

} else {
var statearr_10909_10935 = state_10902__$1;
(statearr_10909_10935[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10903 === (3))){
var inst_10900 = (state_10902[(2)]);
var state_10902__$1 = state_10902;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10902__$1,inst_10900);
} else {
if((state_val_10903 === (12))){
var state_10902__$1 = state_10902;
var statearr_10910_10936 = state_10902__$1;
(statearr_10910_10936[(2)] = null);

(statearr_10910_10936[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10903 === (2))){
var inst_10879 = (state_10902[(7)]);
var state_10902__$1 = state_10902;
if(cljs.core.truth_(inst_10879)){
var statearr_10911_10937 = state_10902__$1;
(statearr_10911_10937[(1)] = (4));

} else {
var statearr_10912_10938 = state_10902__$1;
(statearr_10912_10938[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10903 === (11))){
var inst_10893 = cljs.core.async.close_BANG_.call(null,ch);
var state_10902__$1 = state_10902;
var statearr_10913_10939 = state_10902__$1;
(statearr_10913_10939[(2)] = inst_10893);

(statearr_10913_10939[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10903 === (9))){
var state_10902__$1 = state_10902;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10914_10940 = state_10902__$1;
(statearr_10914_10940[(1)] = (11));

} else {
var statearr_10915_10941 = state_10902__$1;
(statearr_10915_10941[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10903 === (5))){
var inst_10879 = (state_10902[(7)]);
var state_10902__$1 = state_10902;
var statearr_10916_10942 = state_10902__$1;
(statearr_10916_10942[(2)] = inst_10879);

(statearr_10916_10942[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10903 === (10))){
var inst_10898 = (state_10902[(2)]);
var state_10902__$1 = state_10902;
var statearr_10917_10943 = state_10902__$1;
(statearr_10917_10943[(2)] = inst_10898);

(statearr_10917_10943[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10903 === (8))){
var inst_10879 = (state_10902[(7)]);
var inst_10889 = cljs.core.next.call(null,inst_10879);
var inst_10879__$1 = inst_10889;
var state_10902__$1 = (function (){var statearr_10918 = state_10902;
(statearr_10918[(7)] = inst_10879__$1);

return statearr_10918;
})();
var statearr_10919_10944 = state_10902__$1;
(statearr_10919_10944[(2)] = null);

(statearr_10919_10944[(1)] = (2));


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
});})(c__10044__auto__))
;
return ((function (switch__9932__auto__,c__10044__auto__){
return (function() {
var cljs$core$async$state_machine__9933__auto__ = null;
var cljs$core$async$state_machine__9933__auto____0 = (function (){
var statearr_10923 = [null,null,null,null,null,null,null,null];
(statearr_10923[(0)] = cljs$core$async$state_machine__9933__auto__);

(statearr_10923[(1)] = (1));

return statearr_10923;
});
var cljs$core$async$state_machine__9933__auto____1 = (function (state_10902){
while(true){
var ret_value__9934__auto__ = (function (){try{while(true){
var result__9935__auto__ = switch__9932__auto__.call(null,state_10902);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9935__auto__;
}
break;
}
}catch (e10924){if((e10924 instanceof Object)){
var ex__9936__auto__ = e10924;
var statearr_10925_10945 = state_10902;
(statearr_10925_10945[(5)] = ex__9936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10924;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10946 = state_10902;
state_10902 = G__10946;
continue;
} else {
return ret_value__9934__auto__;
}
break;
}
});
cljs$core$async$state_machine__9933__auto__ = function(state_10902){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9933__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9933__auto____1.call(this,state_10902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9933__auto____0;
cljs$core$async$state_machine__9933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9933__auto____1;
return cljs$core$async$state_machine__9933__auto__;
})()
;})(switch__9932__auto__,c__10044__auto__))
})();
var state__10046__auto__ = (function (){var statearr_10926 = f__10045__auto__.call(null);
(statearr_10926[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10044__auto__);

return statearr_10926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10046__auto__);
});})(c__10044__auto__))
);

return c__10044__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__7482__auto__ = (((_ == null))?null:_);
var m__7483__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__7482__auto__)]);
if(!((m__7483__auto__ == null))){
return m__7483__auto__.call(null,_);
} else {
var m__7483__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__7483__auto____$1 == null))){
return m__7483__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__7482__auto__ = (((m == null))?null:m);
var m__7483__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__7482__auto__)]);
if(!((m__7483__auto__ == null))){
return m__7483__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__7483__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__7483__auto____$1 == null))){
return m__7483__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__7482__auto__ = (((m == null))?null:m);
var m__7483__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__7482__auto__)]);
if(!((m__7483__auto__ == null))){
return m__7483__auto__.call(null,m,ch);
} else {
var m__7483__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__7483__auto____$1 == null))){
return m__7483__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__7482__auto__ = (((m == null))?null:m);
var m__7483__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__7482__auto__)]);
if(!((m__7483__auto__ == null))){
return m__7483__auto__.call(null,m);
} else {
var m__7483__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__7483__auto____$1 == null))){
return m__7483__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async11172 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11172 = (function (ch,cs,meta11173){
this.ch = ch;
this.cs = cs;
this.meta11173 = meta11173;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11172.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11174,meta11173__$1){
var self__ = this;
var _11174__$1 = this;
return (new cljs.core.async.t_cljs$core$async11172(self__.ch,self__.cs,meta11173__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async11172.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11174){
var self__ = this;
var _11174__$1 = this;
return self__.meta11173;
});})(cs))
;

cljs.core.async.t_cljs$core$async11172.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11172.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async11172.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11172.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async11172.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async11172.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async11172.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta11173","meta11173",-1414480978,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async11172.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11172.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11172";

cljs.core.async.t_cljs$core$async11172.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7425__auto__,writer__7426__auto__,opt__7427__auto__){
return cljs.core._write.call(null,writer__7426__auto__,"cljs.core.async/t_cljs$core$async11172");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async11172 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async11172(ch__$1,cs__$1,meta11173){
return (new cljs.core.async.t_cljs$core$async11172(ch__$1,cs__$1,meta11173));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async11172(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__10044__auto___11397 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10044__auto___11397,cs,m,dchan,dctr,done){
return (function (){
var f__10045__auto__ = (function (){var switch__9932__auto__ = ((function (c__10044__auto___11397,cs,m,dchan,dctr,done){
return (function (state_11309){
var state_val_11310 = (state_11309[(1)]);
if((state_val_11310 === (7))){
var inst_11305 = (state_11309[(2)]);
var state_11309__$1 = state_11309;
var statearr_11311_11398 = state_11309__$1;
(statearr_11311_11398[(2)] = inst_11305);

(statearr_11311_11398[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11310 === (20))){
var inst_11208 = (state_11309[(7)]);
var inst_11220 = cljs.core.first.call(null,inst_11208);
var inst_11221 = cljs.core.nth.call(null,inst_11220,(0),null);
var inst_11222 = cljs.core.nth.call(null,inst_11220,(1),null);
var state_11309__$1 = (function (){var statearr_11312 = state_11309;
(statearr_11312[(8)] = inst_11221);

return statearr_11312;
})();
if(cljs.core.truth_(inst_11222)){
var statearr_11313_11399 = state_11309__$1;
(statearr_11313_11399[(1)] = (22));

} else {
var statearr_11314_11400 = state_11309__$1;
(statearr_11314_11400[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11310 === (27))){
var inst_11252 = (state_11309[(9)]);
var inst_11177 = (state_11309[(10)]);
var inst_11257 = (state_11309[(11)]);
var inst_11250 = (state_11309[(12)]);
var inst_11257__$1 = cljs.core._nth.call(null,inst_11250,inst_11252);
var inst_11258 = cljs.core.async.put_BANG_.call(null,inst_11257__$1,inst_11177,done);
var state_11309__$1 = (function (){var statearr_11315 = state_11309;
(statearr_11315[(11)] = inst_11257__$1);

return statearr_11315;
})();
if(cljs.core.truth_(inst_11258)){
var statearr_11316_11401 = state_11309__$1;
(statearr_11316_11401[(1)] = (30));

} else {
var statearr_11317_11402 = state_11309__$1;
(statearr_11317_11402[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11310 === (1))){
var state_11309__$1 = state_11309;
var statearr_11318_11403 = state_11309__$1;
(statearr_11318_11403[(2)] = null);

(statearr_11318_11403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11310 === (24))){
var inst_11208 = (state_11309[(7)]);
var inst_11227 = (state_11309[(2)]);
var inst_11228 = cljs.core.next.call(null,inst_11208);
var inst_11186 = inst_11228;
var inst_11187 = null;
var inst_11188 = (0);
var inst_11189 = (0);
var state_11309__$1 = (function (){var statearr_11319 = state_11309;
(statearr_11319[(13)] = inst_11188);

(statearr_11319[(14)] = inst_11186);

(statearr_11319[(15)] = inst_11187);

(statearr_11319[(16)] = inst_11227);

(statearr_11319[(17)] = inst_11189);

return statearr_11319;
})();
var statearr_11320_11404 = state_11309__$1;
(statearr_11320_11404[(2)] = null);

(statearr_11320_11404[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11310 === (39))){
var state_11309__$1 = state_11309;
var statearr_11324_11405 = state_11309__$1;
(statearr_11324_11405[(2)] = null);

(statearr_11324_11405[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11310 === (4))){
var inst_11177 = (state_11309[(10)]);
var inst_11177__$1 = (state_11309[(2)]);
var inst_11178 = (inst_11177__$1 == null);
var state_11309__$1 = (function (){var statearr_11325 = state_11309;
(statearr_11325[(10)] = inst_11177__$1);

return statearr_11325;
})();
if(cljs.core.truth_(inst_11178)){
var statearr_11326_11406 = state_11309__$1;
(statearr_11326_11406[(1)] = (5));

} else {
var statearr_11327_11407 = state_11309__$1;
(statearr_11327_11407[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11310 === (15))){
var inst_11188 = (state_11309[(13)]);
var inst_11186 = (state_11309[(14)]);
var inst_11187 = (state_11309[(15)]);
var inst_11189 = (state_11309[(17)]);
var inst_11204 = (state_11309[(2)]);
var inst_11205 = (inst_11189 + (1));
var tmp11321 = inst_11188;
var tmp11322 = inst_11186;
var tmp11323 = inst_11187;
var inst_11186__$1 = tmp11322;
var inst_11187__$1 = tmp11323;
var inst_11188__$1 = tmp11321;
var inst_11189__$1 = inst_11205;
var state_11309__$1 = (function (){var statearr_11328 = state_11309;
(statearr_11328[(13)] = inst_11188__$1);

(statearr_11328[(14)] = inst_11186__$1);

(statearr_11328[(18)] = inst_11204);

(statearr_11328[(15)] = inst_11187__$1);

(statearr_11328[(17)] = inst_11189__$1);

return statearr_11328;
})();
var statearr_11329_11408 = state_11309__$1;
(statearr_11329_11408[(2)] = null);

(statearr_11329_11408[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11310 === (21))){
var inst_11231 = (state_11309[(2)]);
var state_11309__$1 = state_11309;
var statearr_11333_11409 = state_11309__$1;
(statearr_11333_11409[(2)] = inst_11231);

(statearr_11333_11409[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11310 === (31))){
var inst_11257 = (state_11309[(11)]);
var inst_11261 = done.call(null,null);
var inst_11262 = cljs.core.async.untap_STAR_.call(null,m,inst_11257);
var state_11309__$1 = (function (){var statearr_11334 = state_11309;
(statearr_11334[(19)] = inst_11261);

return statearr_11334;
})();
var statearr_11335_11410 = state_11309__$1;
(statearr_11335_11410[(2)] = inst_11262);

(statearr_11335_11410[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11310 === (32))){
var inst_11251 = (state_11309[(20)]);
var inst_11252 = (state_11309[(9)]);
var inst_11249 = (state_11309[(21)]);
var inst_11250 = (state_11309[(12)]);
var inst_11264 = (state_11309[(2)]);
var inst_11265 = (inst_11252 + (1));
var tmp11330 = inst_11251;
var tmp11331 = inst_11249;
var tmp11332 = inst_11250;
var inst_11249__$1 = tmp11331;
var inst_11250__$1 = tmp11332;
var inst_11251__$1 = tmp11330;
var inst_11252__$1 = inst_11265;
var state_11309__$1 = (function (){var statearr_11336 = state_11309;
(statearr_11336[(20)] = inst_11251__$1);

(statearr_11336[(9)] = inst_11252__$1);

(statearr_11336[(21)] = inst_11249__$1);

(statearr_11336[(22)] = inst_11264);

(statearr_11336[(12)] = inst_11250__$1);

return statearr_11336;
})();
var statearr_11337_11411 = state_11309__$1;
(statearr_11337_11411[(2)] = null);

(statearr_11337_11411[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11310 === (40))){
var inst_11277 = (state_11309[(23)]);
var inst_11281 = done.call(null,null);
var inst_11282 = cljs.core.async.untap_STAR_.call(null,m,inst_11277);
var state_11309__$1 = (function (){var statearr_11338 = state_11309;
(statearr_11338[(24)] = inst_11281);

return statearr_11338;
})();
var statearr_11339_11412 = state_11309__$1;
(statearr_11339_11412[(2)] = inst_11282);

(statearr_11339_11412[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11310 === (33))){
var inst_11268 = (state_11309[(25)]);
var inst_11270 = cljs.core.chunked_seq_QMARK_.call(null,inst_11268);
var state_11309__$1 = state_11309;
if(inst_11270){
var statearr_11340_11413 = state_11309__$1;
(statearr_11340_11413[(1)] = (36));

} else {
var statearr_11341_11414 = state_11309__$1;
(statearr_11341_11414[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11310 === (13))){
var inst_11198 = (state_11309[(26)]);
var inst_11201 = cljs.core.async.close_BANG_.call(null,inst_11198);
var state_11309__$1 = state_11309;
var statearr_11342_11415 = state_11309__$1;
(statearr_11342_11415[(2)] = inst_11201);

(statearr_11342_11415[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11310 === (22))){
var inst_11221 = (state_11309[(8)]);
var inst_11224 = cljs.core.async.close_BANG_.call(null,inst_11221);
var state_11309__$1 = state_11309;
var statearr_11343_11416 = state_11309__$1;
(statearr_11343_11416[(2)] = inst_11224);

(statearr_11343_11416[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11310 === (36))){
var inst_11268 = (state_11309[(25)]);
var inst_11272 = cljs.core.chunk_first.call(null,inst_11268);
var inst_11273 = cljs.core.chunk_rest.call(null,inst_11268);
var inst_11274 = cljs.core.count.call(null,inst_11272);
var inst_11249 = inst_11273;
var inst_11250 = inst_11272;
var inst_11251 = inst_11274;
var inst_11252 = (0);
var state_11309__$1 = (function (){var statearr_11344 = state_11309;
(statearr_11344[(20)] = inst_11251);

(statearr_11344[(9)] = inst_11252);

(statearr_11344[(21)] = inst_11249);

(statearr_11344[(12)] = inst_11250);

return statearr_11344;
})();
var statearr_11345_11417 = state_11309__$1;
(statearr_11345_11417[(2)] = null);

(statearr_11345_11417[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11310 === (41))){
var inst_11268 = (state_11309[(25)]);
var inst_11284 = (state_11309[(2)]);
var inst_11285 = cljs.core.next.call(null,inst_11268);
var inst_11249 = inst_11285;
var inst_11250 = null;
var inst_11251 = (0);
var inst_11252 = (0);
var state_11309__$1 = (function (){var statearr_11346 = state_11309;
(statearr_11346[(20)] = inst_11251);

(statearr_11346[(9)] = inst_11252);

(statearr_11346[(21)] = inst_11249);

(statearr_11346[(27)] = inst_11284);

(statearr_11346[(12)] = inst_11250);

return statearr_11346;
})();
var statearr_11347_11418 = state_11309__$1;
(statearr_11347_11418[(2)] = null);

(statearr_11347_11418[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11310 === (43))){
var state_11309__$1 = state_11309;
var statearr_11348_11419 = state_11309__$1;
(statearr_11348_11419[(2)] = null);

(statearr_11348_11419[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11310 === (29))){
var inst_11293 = (state_11309[(2)]);
var state_11309__$1 = state_11309;
var statearr_11349_11420 = state_11309__$1;
(statearr_11349_11420[(2)] = inst_11293);

(statearr_11349_11420[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11310 === (44))){
var inst_11302 = (state_11309[(2)]);
var state_11309__$1 = (function (){var statearr_11350 = state_11309;
(statearr_11350[(28)] = inst_11302);

return statearr_11350;
})();
var statearr_11351_11421 = state_11309__$1;
(statearr_11351_11421[(2)] = null);

(statearr_11351_11421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11310 === (6))){
var inst_11241 = (state_11309[(29)]);
var inst_11240 = cljs.core.deref.call(null,cs);
var inst_11241__$1 = cljs.core.keys.call(null,inst_11240);
var inst_11242 = cljs.core.count.call(null,inst_11241__$1);
var inst_11243 = cljs.core.reset_BANG_.call(null,dctr,inst_11242);
var inst_11248 = cljs.core.seq.call(null,inst_11241__$1);
var inst_11249 = inst_11248;
var inst_11250 = null;
var inst_11251 = (0);
var inst_11252 = (0);
var state_11309__$1 = (function (){var statearr_11352 = state_11309;
(statearr_11352[(20)] = inst_11251);

(statearr_11352[(9)] = inst_11252);

(statearr_11352[(30)] = inst_11243);

(statearr_11352[(29)] = inst_11241__$1);

(statearr_11352[(21)] = inst_11249);

(statearr_11352[(12)] = inst_11250);

return statearr_11352;
})();
var statearr_11353_11422 = state_11309__$1;
(statearr_11353_11422[(2)] = null);

(statearr_11353_11422[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11310 === (28))){
var inst_11249 = (state_11309[(21)]);
var inst_11268 = (state_11309[(25)]);
var inst_11268__$1 = cljs.core.seq.call(null,inst_11249);
var state_11309__$1 = (function (){var statearr_11354 = state_11309;
(statearr_11354[(25)] = inst_11268__$1);

return statearr_11354;
})();
if(inst_11268__$1){
var statearr_11355_11423 = state_11309__$1;
(statearr_11355_11423[(1)] = (33));

} else {
var statearr_11356_11424 = state_11309__$1;
(statearr_11356_11424[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11310 === (25))){
var inst_11251 = (state_11309[(20)]);
var inst_11252 = (state_11309[(9)]);
var inst_11254 = (inst_11252 < inst_11251);
var inst_11255 = inst_11254;
var state_11309__$1 = state_11309;
if(cljs.core.truth_(inst_11255)){
var statearr_11357_11425 = state_11309__$1;
(statearr_11357_11425[(1)] = (27));

} else {
var statearr_11358_11426 = state_11309__$1;
(statearr_11358_11426[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11310 === (34))){
var state_11309__$1 = state_11309;
var statearr_11359_11427 = state_11309__$1;
(statearr_11359_11427[(2)] = null);

(statearr_11359_11427[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11310 === (17))){
var state_11309__$1 = state_11309;
var statearr_11360_11428 = state_11309__$1;
(statearr_11360_11428[(2)] = null);

(statearr_11360_11428[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11310 === (3))){
var inst_11307 = (state_11309[(2)]);
var state_11309__$1 = state_11309;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11309__$1,inst_11307);
} else {
if((state_val_11310 === (12))){
var inst_11236 = (state_11309[(2)]);
var state_11309__$1 = state_11309;
var statearr_11361_11429 = state_11309__$1;
(statearr_11361_11429[(2)] = inst_11236);

(statearr_11361_11429[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11310 === (2))){
var state_11309__$1 = state_11309;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11309__$1,(4),ch);
} else {
if((state_val_11310 === (23))){
var state_11309__$1 = state_11309;
var statearr_11362_11430 = state_11309__$1;
(statearr_11362_11430[(2)] = null);

(statearr_11362_11430[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11310 === (35))){
var inst_11291 = (state_11309[(2)]);
var state_11309__$1 = state_11309;
var statearr_11363_11431 = state_11309__$1;
(statearr_11363_11431[(2)] = inst_11291);

(statearr_11363_11431[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11310 === (19))){
var inst_11208 = (state_11309[(7)]);
var inst_11212 = cljs.core.chunk_first.call(null,inst_11208);
var inst_11213 = cljs.core.chunk_rest.call(null,inst_11208);
var inst_11214 = cljs.core.count.call(null,inst_11212);
var inst_11186 = inst_11213;
var inst_11187 = inst_11212;
var inst_11188 = inst_11214;
var inst_11189 = (0);
var state_11309__$1 = (function (){var statearr_11364 = state_11309;
(statearr_11364[(13)] = inst_11188);

(statearr_11364[(14)] = inst_11186);

(statearr_11364[(15)] = inst_11187);

(statearr_11364[(17)] = inst_11189);

return statearr_11364;
})();
var statearr_11365_11432 = state_11309__$1;
(statearr_11365_11432[(2)] = null);

(statearr_11365_11432[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11310 === (11))){
var inst_11208 = (state_11309[(7)]);
var inst_11186 = (state_11309[(14)]);
var inst_11208__$1 = cljs.core.seq.call(null,inst_11186);
var state_11309__$1 = (function (){var statearr_11366 = state_11309;
(statearr_11366[(7)] = inst_11208__$1);

return statearr_11366;
})();
if(inst_11208__$1){
var statearr_11367_11433 = state_11309__$1;
(statearr_11367_11433[(1)] = (16));

} else {
var statearr_11368_11434 = state_11309__$1;
(statearr_11368_11434[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11310 === (9))){
var inst_11238 = (state_11309[(2)]);
var state_11309__$1 = state_11309;
var statearr_11369_11435 = state_11309__$1;
(statearr_11369_11435[(2)] = inst_11238);

(statearr_11369_11435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11310 === (5))){
var inst_11184 = cljs.core.deref.call(null,cs);
var inst_11185 = cljs.core.seq.call(null,inst_11184);
var inst_11186 = inst_11185;
var inst_11187 = null;
var inst_11188 = (0);
var inst_11189 = (0);
var state_11309__$1 = (function (){var statearr_11370 = state_11309;
(statearr_11370[(13)] = inst_11188);

(statearr_11370[(14)] = inst_11186);

(statearr_11370[(15)] = inst_11187);

(statearr_11370[(17)] = inst_11189);

return statearr_11370;
})();
var statearr_11371_11436 = state_11309__$1;
(statearr_11371_11436[(2)] = null);

(statearr_11371_11436[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11310 === (14))){
var state_11309__$1 = state_11309;
var statearr_11372_11437 = state_11309__$1;
(statearr_11372_11437[(2)] = null);

(statearr_11372_11437[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11310 === (45))){
var inst_11299 = (state_11309[(2)]);
var state_11309__$1 = state_11309;
var statearr_11373_11438 = state_11309__$1;
(statearr_11373_11438[(2)] = inst_11299);

(statearr_11373_11438[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11310 === (26))){
var inst_11241 = (state_11309[(29)]);
var inst_11295 = (state_11309[(2)]);
var inst_11296 = cljs.core.seq.call(null,inst_11241);
var state_11309__$1 = (function (){var statearr_11374 = state_11309;
(statearr_11374[(31)] = inst_11295);

return statearr_11374;
})();
if(inst_11296){
var statearr_11375_11439 = state_11309__$1;
(statearr_11375_11439[(1)] = (42));

} else {
var statearr_11376_11440 = state_11309__$1;
(statearr_11376_11440[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11310 === (16))){
var inst_11208 = (state_11309[(7)]);
var inst_11210 = cljs.core.chunked_seq_QMARK_.call(null,inst_11208);
var state_11309__$1 = state_11309;
if(inst_11210){
var statearr_11377_11441 = state_11309__$1;
(statearr_11377_11441[(1)] = (19));

} else {
var statearr_11378_11442 = state_11309__$1;
(statearr_11378_11442[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11310 === (38))){
var inst_11288 = (state_11309[(2)]);
var state_11309__$1 = state_11309;
var statearr_11379_11443 = state_11309__$1;
(statearr_11379_11443[(2)] = inst_11288);

(statearr_11379_11443[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11310 === (30))){
var state_11309__$1 = state_11309;
var statearr_11380_11444 = state_11309__$1;
(statearr_11380_11444[(2)] = null);

(statearr_11380_11444[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11310 === (10))){
var inst_11187 = (state_11309[(15)]);
var inst_11189 = (state_11309[(17)]);
var inst_11197 = cljs.core._nth.call(null,inst_11187,inst_11189);
var inst_11198 = cljs.core.nth.call(null,inst_11197,(0),null);
var inst_11199 = cljs.core.nth.call(null,inst_11197,(1),null);
var state_11309__$1 = (function (){var statearr_11381 = state_11309;
(statearr_11381[(26)] = inst_11198);

return statearr_11381;
})();
if(cljs.core.truth_(inst_11199)){
var statearr_11382_11445 = state_11309__$1;
(statearr_11382_11445[(1)] = (13));

} else {
var statearr_11383_11446 = state_11309__$1;
(statearr_11383_11446[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11310 === (18))){
var inst_11234 = (state_11309[(2)]);
var state_11309__$1 = state_11309;
var statearr_11384_11447 = state_11309__$1;
(statearr_11384_11447[(2)] = inst_11234);

(statearr_11384_11447[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11310 === (42))){
var state_11309__$1 = state_11309;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11309__$1,(45),dchan);
} else {
if((state_val_11310 === (37))){
var inst_11177 = (state_11309[(10)]);
var inst_11268 = (state_11309[(25)]);
var inst_11277 = (state_11309[(23)]);
var inst_11277__$1 = cljs.core.first.call(null,inst_11268);
var inst_11278 = cljs.core.async.put_BANG_.call(null,inst_11277__$1,inst_11177,done);
var state_11309__$1 = (function (){var statearr_11385 = state_11309;
(statearr_11385[(23)] = inst_11277__$1);

return statearr_11385;
})();
if(cljs.core.truth_(inst_11278)){
var statearr_11386_11448 = state_11309__$1;
(statearr_11386_11448[(1)] = (39));

} else {
var statearr_11387_11449 = state_11309__$1;
(statearr_11387_11449[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11310 === (8))){
var inst_11188 = (state_11309[(13)]);
var inst_11189 = (state_11309[(17)]);
var inst_11191 = (inst_11189 < inst_11188);
var inst_11192 = inst_11191;
var state_11309__$1 = state_11309;
if(cljs.core.truth_(inst_11192)){
var statearr_11388_11450 = state_11309__$1;
(statearr_11388_11450[(1)] = (10));

} else {
var statearr_11389_11451 = state_11309__$1;
(statearr_11389_11451[(1)] = (11));

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
});})(c__10044__auto___11397,cs,m,dchan,dctr,done))
;
return ((function (switch__9932__auto__,c__10044__auto___11397,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__9933__auto__ = null;
var cljs$core$async$mult_$_state_machine__9933__auto____0 = (function (){
var statearr_11393 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11393[(0)] = cljs$core$async$mult_$_state_machine__9933__auto__);

(statearr_11393[(1)] = (1));

return statearr_11393;
});
var cljs$core$async$mult_$_state_machine__9933__auto____1 = (function (state_11309){
while(true){
var ret_value__9934__auto__ = (function (){try{while(true){
var result__9935__auto__ = switch__9932__auto__.call(null,state_11309);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9935__auto__;
}
break;
}
}catch (e11394){if((e11394 instanceof Object)){
var ex__9936__auto__ = e11394;
var statearr_11395_11452 = state_11309;
(statearr_11395_11452[(5)] = ex__9936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11309);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11394;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11453 = state_11309;
state_11309 = G__11453;
continue;
} else {
return ret_value__9934__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__9933__auto__ = function(state_11309){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__9933__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__9933__auto____1.call(this,state_11309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__9933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__9933__auto____0;
cljs$core$async$mult_$_state_machine__9933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__9933__auto____1;
return cljs$core$async$mult_$_state_machine__9933__auto__;
})()
;})(switch__9932__auto__,c__10044__auto___11397,cs,m,dchan,dctr,done))
})();
var state__10046__auto__ = (function (){var statearr_11396 = f__10045__auto__.call(null);
(statearr_11396[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10044__auto___11397);

return statearr_11396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10046__auto__);
});})(c__10044__auto___11397,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args11454 = [];
var len__7923__auto___11457 = arguments.length;
var i__7924__auto___11458 = (0);
while(true){
if((i__7924__auto___11458 < len__7923__auto___11457)){
args11454.push((arguments[i__7924__auto___11458]));

var G__11459 = (i__7924__auto___11458 + (1));
i__7924__auto___11458 = G__11459;
continue;
} else {
}
break;
}

var G__11456 = args11454.length;
switch (G__11456) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11454.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__7482__auto__ = (((m == null))?null:m);
var m__7483__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__7482__auto__)]);
if(!((m__7483__auto__ == null))){
return m__7483__auto__.call(null,m,ch);
} else {
var m__7483__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__7483__auto____$1 == null))){
return m__7483__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__7482__auto__ = (((m == null))?null:m);
var m__7483__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__7482__auto__)]);
if(!((m__7483__auto__ == null))){
return m__7483__auto__.call(null,m,ch);
} else {
var m__7483__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__7483__auto____$1 == null))){
return m__7483__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__7482__auto__ = (((m == null))?null:m);
var m__7483__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__7482__auto__)]);
if(!((m__7483__auto__ == null))){
return m__7483__auto__.call(null,m);
} else {
var m__7483__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__7483__auto____$1 == null))){
return m__7483__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__7482__auto__ = (((m == null))?null:m);
var m__7483__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__7482__auto__)]);
if(!((m__7483__auto__ == null))){
return m__7483__auto__.call(null,m,state_map);
} else {
var m__7483__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__7483__auto____$1 == null))){
return m__7483__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__7482__auto__ = (((m == null))?null:m);
var m__7483__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__7482__auto__)]);
if(!((m__7483__auto__ == null))){
return m__7483__auto__.call(null,m,mode);
} else {
var m__7483__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__7483__auto____$1 == null))){
return m__7483__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7930__auto__ = [];
var len__7923__auto___11471 = arguments.length;
var i__7924__auto___11472 = (0);
while(true){
if((i__7924__auto___11472 < len__7923__auto___11471)){
args__7930__auto__.push((arguments[i__7924__auto___11472]));

var G__11473 = (i__7924__auto___11472 + (1));
i__7924__auto___11472 = G__11473;
continue;
} else {
}
break;
}

var argseq__7931__auto__ = ((((3) < args__7930__auto__.length))?(new cljs.core.IndexedSeq(args__7930__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7931__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__11465){
var map__11466 = p__11465;
var map__11466__$1 = ((((!((map__11466 == null)))?((((map__11466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11466.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11466):map__11466);
var opts = map__11466__$1;
var statearr_11468_11474 = state;
(statearr_11468_11474[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__11466,map__11466__$1,opts){
return (function (val){
var statearr_11469_11475 = state;
(statearr_11469_11475[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__11466,map__11466__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_11470_11476 = state;
(statearr_11470_11476[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq11461){
var G__11462 = cljs.core.first.call(null,seq11461);
var seq11461__$1 = cljs.core.next.call(null,seq11461);
var G__11463 = cljs.core.first.call(null,seq11461__$1);
var seq11461__$2 = cljs.core.next.call(null,seq11461__$1);
var G__11464 = cljs.core.first.call(null,seq11461__$2);
var seq11461__$3 = cljs.core.next.call(null,seq11461__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11462,G__11463,G__11464,seq11461__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async11644 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11644 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta11645){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta11645 = meta11645;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11644.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11646,meta11645__$1){
var self__ = this;
var _11646__$1 = this;
return (new cljs.core.async.t_cljs$core$async11644(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta11645__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11644.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11646){
var self__ = this;
var _11646__$1 = this;
return self__.meta11645;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11644.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11644.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11644.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11644.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11644.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11644.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11644.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11644.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11644.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta11645","meta11645",739621417,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11644.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11644.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11644";

cljs.core.async.t_cljs$core$async11644.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7425__auto__,writer__7426__auto__,opt__7427__auto__){
return cljs.core._write.call(null,writer__7426__auto__,"cljs.core.async/t_cljs$core$async11644");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async11644 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async11644(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta11645){
return (new cljs.core.async.t_cljs$core$async11644(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta11645));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async11644(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10044__auto___11811 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10044__auto___11811,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__10045__auto__ = (function (){var switch__9932__auto__ = ((function (c__10044__auto___11811,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_11748){
var state_val_11749 = (state_11748[(1)]);
if((state_val_11749 === (7))){
var inst_11663 = (state_11748[(2)]);
var state_11748__$1 = state_11748;
var statearr_11750_11812 = state_11748__$1;
(statearr_11750_11812[(2)] = inst_11663);

(statearr_11750_11812[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11749 === (20))){
var inst_11675 = (state_11748[(7)]);
var state_11748__$1 = state_11748;
var statearr_11751_11813 = state_11748__$1;
(statearr_11751_11813[(2)] = inst_11675);

(statearr_11751_11813[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11749 === (27))){
var state_11748__$1 = state_11748;
var statearr_11752_11814 = state_11748__$1;
(statearr_11752_11814[(2)] = null);

(statearr_11752_11814[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11749 === (1))){
var inst_11650 = (state_11748[(8)]);
var inst_11650__$1 = calc_state.call(null);
var inst_11652 = (inst_11650__$1 == null);
var inst_11653 = cljs.core.not.call(null,inst_11652);
var state_11748__$1 = (function (){var statearr_11753 = state_11748;
(statearr_11753[(8)] = inst_11650__$1);

return statearr_11753;
})();
if(inst_11653){
var statearr_11754_11815 = state_11748__$1;
(statearr_11754_11815[(1)] = (2));

} else {
var statearr_11755_11816 = state_11748__$1;
(statearr_11755_11816[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11749 === (24))){
var inst_11722 = (state_11748[(9)]);
var inst_11699 = (state_11748[(10)]);
var inst_11708 = (state_11748[(11)]);
var inst_11722__$1 = inst_11699.call(null,inst_11708);
var state_11748__$1 = (function (){var statearr_11756 = state_11748;
(statearr_11756[(9)] = inst_11722__$1);

return statearr_11756;
})();
if(cljs.core.truth_(inst_11722__$1)){
var statearr_11757_11817 = state_11748__$1;
(statearr_11757_11817[(1)] = (29));

} else {
var statearr_11758_11818 = state_11748__$1;
(statearr_11758_11818[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11749 === (4))){
var inst_11666 = (state_11748[(2)]);
var state_11748__$1 = state_11748;
if(cljs.core.truth_(inst_11666)){
var statearr_11759_11819 = state_11748__$1;
(statearr_11759_11819[(1)] = (8));

} else {
var statearr_11760_11820 = state_11748__$1;
(statearr_11760_11820[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11749 === (15))){
var inst_11693 = (state_11748[(2)]);
var state_11748__$1 = state_11748;
if(cljs.core.truth_(inst_11693)){
var statearr_11761_11821 = state_11748__$1;
(statearr_11761_11821[(1)] = (19));

} else {
var statearr_11762_11822 = state_11748__$1;
(statearr_11762_11822[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11749 === (21))){
var inst_11698 = (state_11748[(12)]);
var inst_11698__$1 = (state_11748[(2)]);
var inst_11699 = cljs.core.get.call(null,inst_11698__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11700 = cljs.core.get.call(null,inst_11698__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11701 = cljs.core.get.call(null,inst_11698__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_11748__$1 = (function (){var statearr_11763 = state_11748;
(statearr_11763[(12)] = inst_11698__$1);

(statearr_11763[(10)] = inst_11699);

(statearr_11763[(13)] = inst_11700);

return statearr_11763;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_11748__$1,(22),inst_11701);
} else {
if((state_val_11749 === (31))){
var inst_11730 = (state_11748[(2)]);
var state_11748__$1 = state_11748;
if(cljs.core.truth_(inst_11730)){
var statearr_11764_11823 = state_11748__$1;
(statearr_11764_11823[(1)] = (32));

} else {
var statearr_11765_11824 = state_11748__$1;
(statearr_11765_11824[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11749 === (32))){
var inst_11707 = (state_11748[(14)]);
var state_11748__$1 = state_11748;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11748__$1,(35),out,inst_11707);
} else {
if((state_val_11749 === (33))){
var inst_11698 = (state_11748[(12)]);
var inst_11675 = inst_11698;
var state_11748__$1 = (function (){var statearr_11766 = state_11748;
(statearr_11766[(7)] = inst_11675);

return statearr_11766;
})();
var statearr_11767_11825 = state_11748__$1;
(statearr_11767_11825[(2)] = null);

(statearr_11767_11825[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11749 === (13))){
var inst_11675 = (state_11748[(7)]);
var inst_11682 = inst_11675.cljs$lang$protocol_mask$partition0$;
var inst_11683 = (inst_11682 & (64));
var inst_11684 = inst_11675.cljs$core$ISeq$;
var inst_11685 = (cljs.core.PROTOCOL_SENTINEL === inst_11684);
var inst_11686 = (inst_11683) || (inst_11685);
var state_11748__$1 = state_11748;
if(cljs.core.truth_(inst_11686)){
var statearr_11768_11826 = state_11748__$1;
(statearr_11768_11826[(1)] = (16));

} else {
var statearr_11769_11827 = state_11748__$1;
(statearr_11769_11827[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11749 === (22))){
var inst_11708 = (state_11748[(11)]);
var inst_11707 = (state_11748[(14)]);
var inst_11706 = (state_11748[(2)]);
var inst_11707__$1 = cljs.core.nth.call(null,inst_11706,(0),null);
var inst_11708__$1 = cljs.core.nth.call(null,inst_11706,(1),null);
var inst_11709 = (inst_11707__$1 == null);
var inst_11710 = cljs.core._EQ_.call(null,inst_11708__$1,change);
var inst_11711 = (inst_11709) || (inst_11710);
var state_11748__$1 = (function (){var statearr_11770 = state_11748;
(statearr_11770[(11)] = inst_11708__$1);

(statearr_11770[(14)] = inst_11707__$1);

return statearr_11770;
})();
if(cljs.core.truth_(inst_11711)){
var statearr_11771_11828 = state_11748__$1;
(statearr_11771_11828[(1)] = (23));

} else {
var statearr_11772_11829 = state_11748__$1;
(statearr_11772_11829[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11749 === (36))){
var inst_11698 = (state_11748[(12)]);
var inst_11675 = inst_11698;
var state_11748__$1 = (function (){var statearr_11773 = state_11748;
(statearr_11773[(7)] = inst_11675);

return statearr_11773;
})();
var statearr_11774_11830 = state_11748__$1;
(statearr_11774_11830[(2)] = null);

(statearr_11774_11830[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11749 === (29))){
var inst_11722 = (state_11748[(9)]);
var state_11748__$1 = state_11748;
var statearr_11775_11831 = state_11748__$1;
(statearr_11775_11831[(2)] = inst_11722);

(statearr_11775_11831[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11749 === (6))){
var state_11748__$1 = state_11748;
var statearr_11776_11832 = state_11748__$1;
(statearr_11776_11832[(2)] = false);

(statearr_11776_11832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11749 === (28))){
var inst_11718 = (state_11748[(2)]);
var inst_11719 = calc_state.call(null);
var inst_11675 = inst_11719;
var state_11748__$1 = (function (){var statearr_11777 = state_11748;
(statearr_11777[(15)] = inst_11718);

(statearr_11777[(7)] = inst_11675);

return statearr_11777;
})();
var statearr_11778_11833 = state_11748__$1;
(statearr_11778_11833[(2)] = null);

(statearr_11778_11833[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11749 === (25))){
var inst_11744 = (state_11748[(2)]);
var state_11748__$1 = state_11748;
var statearr_11779_11834 = state_11748__$1;
(statearr_11779_11834[(2)] = inst_11744);

(statearr_11779_11834[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11749 === (34))){
var inst_11742 = (state_11748[(2)]);
var state_11748__$1 = state_11748;
var statearr_11780_11835 = state_11748__$1;
(statearr_11780_11835[(2)] = inst_11742);

(statearr_11780_11835[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11749 === (17))){
var state_11748__$1 = state_11748;
var statearr_11781_11836 = state_11748__$1;
(statearr_11781_11836[(2)] = false);

(statearr_11781_11836[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11749 === (3))){
var state_11748__$1 = state_11748;
var statearr_11782_11837 = state_11748__$1;
(statearr_11782_11837[(2)] = false);

(statearr_11782_11837[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11749 === (12))){
var inst_11746 = (state_11748[(2)]);
var state_11748__$1 = state_11748;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11748__$1,inst_11746);
} else {
if((state_val_11749 === (2))){
var inst_11650 = (state_11748[(8)]);
var inst_11655 = inst_11650.cljs$lang$protocol_mask$partition0$;
var inst_11656 = (inst_11655 & (64));
var inst_11657 = inst_11650.cljs$core$ISeq$;
var inst_11658 = (cljs.core.PROTOCOL_SENTINEL === inst_11657);
var inst_11659 = (inst_11656) || (inst_11658);
var state_11748__$1 = state_11748;
if(cljs.core.truth_(inst_11659)){
var statearr_11783_11838 = state_11748__$1;
(statearr_11783_11838[(1)] = (5));

} else {
var statearr_11784_11839 = state_11748__$1;
(statearr_11784_11839[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11749 === (23))){
var inst_11707 = (state_11748[(14)]);
var inst_11713 = (inst_11707 == null);
var state_11748__$1 = state_11748;
if(cljs.core.truth_(inst_11713)){
var statearr_11785_11840 = state_11748__$1;
(statearr_11785_11840[(1)] = (26));

} else {
var statearr_11786_11841 = state_11748__$1;
(statearr_11786_11841[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11749 === (35))){
var inst_11733 = (state_11748[(2)]);
var state_11748__$1 = state_11748;
if(cljs.core.truth_(inst_11733)){
var statearr_11787_11842 = state_11748__$1;
(statearr_11787_11842[(1)] = (36));

} else {
var statearr_11788_11843 = state_11748__$1;
(statearr_11788_11843[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11749 === (19))){
var inst_11675 = (state_11748[(7)]);
var inst_11695 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11675);
var state_11748__$1 = state_11748;
var statearr_11789_11844 = state_11748__$1;
(statearr_11789_11844[(2)] = inst_11695);

(statearr_11789_11844[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11749 === (11))){
var inst_11675 = (state_11748[(7)]);
var inst_11679 = (inst_11675 == null);
var inst_11680 = cljs.core.not.call(null,inst_11679);
var state_11748__$1 = state_11748;
if(inst_11680){
var statearr_11790_11845 = state_11748__$1;
(statearr_11790_11845[(1)] = (13));

} else {
var statearr_11791_11846 = state_11748__$1;
(statearr_11791_11846[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11749 === (9))){
var inst_11650 = (state_11748[(8)]);
var state_11748__$1 = state_11748;
var statearr_11792_11847 = state_11748__$1;
(statearr_11792_11847[(2)] = inst_11650);

(statearr_11792_11847[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11749 === (5))){
var state_11748__$1 = state_11748;
var statearr_11793_11848 = state_11748__$1;
(statearr_11793_11848[(2)] = true);

(statearr_11793_11848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11749 === (14))){
var state_11748__$1 = state_11748;
var statearr_11794_11849 = state_11748__$1;
(statearr_11794_11849[(2)] = false);

(statearr_11794_11849[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11749 === (26))){
var inst_11708 = (state_11748[(11)]);
var inst_11715 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11708);
var state_11748__$1 = state_11748;
var statearr_11795_11850 = state_11748__$1;
(statearr_11795_11850[(2)] = inst_11715);

(statearr_11795_11850[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11749 === (16))){
var state_11748__$1 = state_11748;
var statearr_11796_11851 = state_11748__$1;
(statearr_11796_11851[(2)] = true);

(statearr_11796_11851[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11749 === (38))){
var inst_11738 = (state_11748[(2)]);
var state_11748__$1 = state_11748;
var statearr_11797_11852 = state_11748__$1;
(statearr_11797_11852[(2)] = inst_11738);

(statearr_11797_11852[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11749 === (30))){
var inst_11699 = (state_11748[(10)]);
var inst_11700 = (state_11748[(13)]);
var inst_11708 = (state_11748[(11)]);
var inst_11725 = cljs.core.empty_QMARK_.call(null,inst_11699);
var inst_11726 = inst_11700.call(null,inst_11708);
var inst_11727 = cljs.core.not.call(null,inst_11726);
var inst_11728 = (inst_11725) && (inst_11727);
var state_11748__$1 = state_11748;
var statearr_11798_11853 = state_11748__$1;
(statearr_11798_11853[(2)] = inst_11728);

(statearr_11798_11853[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11749 === (10))){
var inst_11650 = (state_11748[(8)]);
var inst_11671 = (state_11748[(2)]);
var inst_11672 = cljs.core.get.call(null,inst_11671,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11673 = cljs.core.get.call(null,inst_11671,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11674 = cljs.core.get.call(null,inst_11671,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_11675 = inst_11650;
var state_11748__$1 = (function (){var statearr_11799 = state_11748;
(statearr_11799[(16)] = inst_11673);

(statearr_11799[(17)] = inst_11672);

(statearr_11799[(7)] = inst_11675);

(statearr_11799[(18)] = inst_11674);

return statearr_11799;
})();
var statearr_11800_11854 = state_11748__$1;
(statearr_11800_11854[(2)] = null);

(statearr_11800_11854[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11749 === (18))){
var inst_11690 = (state_11748[(2)]);
var state_11748__$1 = state_11748;
var statearr_11801_11855 = state_11748__$1;
(statearr_11801_11855[(2)] = inst_11690);

(statearr_11801_11855[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11749 === (37))){
var state_11748__$1 = state_11748;
var statearr_11802_11856 = state_11748__$1;
(statearr_11802_11856[(2)] = null);

(statearr_11802_11856[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11749 === (8))){
var inst_11650 = (state_11748[(8)]);
var inst_11668 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11650);
var state_11748__$1 = state_11748;
var statearr_11803_11857 = state_11748__$1;
(statearr_11803_11857[(2)] = inst_11668);

(statearr_11803_11857[(1)] = (10));


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
});})(c__10044__auto___11811,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__9932__auto__,c__10044__auto___11811,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__9933__auto__ = null;
var cljs$core$async$mix_$_state_machine__9933__auto____0 = (function (){
var statearr_11807 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11807[(0)] = cljs$core$async$mix_$_state_machine__9933__auto__);

(statearr_11807[(1)] = (1));

return statearr_11807;
});
var cljs$core$async$mix_$_state_machine__9933__auto____1 = (function (state_11748){
while(true){
var ret_value__9934__auto__ = (function (){try{while(true){
var result__9935__auto__ = switch__9932__auto__.call(null,state_11748);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9935__auto__;
}
break;
}
}catch (e11808){if((e11808 instanceof Object)){
var ex__9936__auto__ = e11808;
var statearr_11809_11858 = state_11748;
(statearr_11809_11858[(5)] = ex__9936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11808;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11859 = state_11748;
state_11748 = G__11859;
continue;
} else {
return ret_value__9934__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__9933__auto__ = function(state_11748){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__9933__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__9933__auto____1.call(this,state_11748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__9933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__9933__auto____0;
cljs$core$async$mix_$_state_machine__9933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__9933__auto____1;
return cljs$core$async$mix_$_state_machine__9933__auto__;
})()
;})(switch__9932__auto__,c__10044__auto___11811,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__10046__auto__ = (function (){var statearr_11810 = f__10045__auto__.call(null);
(statearr_11810[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10044__auto___11811);

return statearr_11810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10046__auto__);
});})(c__10044__auto___11811,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__7482__auto__ = (((p == null))?null:p);
var m__7483__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__7482__auto__)]);
if(!((m__7483__auto__ == null))){
return m__7483__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__7483__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__7483__auto____$1 == null))){
return m__7483__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__7482__auto__ = (((p == null))?null:p);
var m__7483__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__7482__auto__)]);
if(!((m__7483__auto__ == null))){
return m__7483__auto__.call(null,p,v,ch);
} else {
var m__7483__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__7483__auto____$1 == null))){
return m__7483__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args11860 = [];
var len__7923__auto___11863 = arguments.length;
var i__7924__auto___11864 = (0);
while(true){
if((i__7924__auto___11864 < len__7923__auto___11863)){
args11860.push((arguments[i__7924__auto___11864]));

var G__11865 = (i__7924__auto___11864 + (1));
i__7924__auto___11864 = G__11865;
continue;
} else {
}
break;
}

var G__11862 = args11860.length;
switch (G__11862) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11860.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__7482__auto__ = (((p == null))?null:p);
var m__7483__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7482__auto__)]);
if(!((m__7483__auto__ == null))){
return m__7483__auto__.call(null,p);
} else {
var m__7483__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7483__auto____$1 == null))){
return m__7483__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__7482__auto__ = (((p == null))?null:p);
var m__7483__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7482__auto__)]);
if(!((m__7483__auto__ == null))){
return m__7483__auto__.call(null,p,v);
} else {
var m__7483__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7483__auto____$1 == null))){
return m__7483__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args11868 = [];
var len__7923__auto___11993 = arguments.length;
var i__7924__auto___11994 = (0);
while(true){
if((i__7924__auto___11994 < len__7923__auto___11993)){
args11868.push((arguments[i__7924__auto___11994]));

var G__11995 = (i__7924__auto___11994 + (1));
i__7924__auto___11994 = G__11995;
continue;
} else {
}
break;
}

var G__11870 = args11868.length;
switch (G__11870) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11868.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__6814__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__6814__auto__)){
return or__6814__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__6814__auto__,mults){
return (function (p1__11867_SHARP_){
if(cljs.core.truth_(p1__11867_SHARP_.call(null,topic))){
return p1__11867_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__11867_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6814__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async11871 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11871 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta11872){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta11872 = meta11872;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11871.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11873,meta11872__$1){
var self__ = this;
var _11873__$1 = this;
return (new cljs.core.async.t_cljs$core$async11871(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta11872__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11871.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11873){
var self__ = this;
var _11873__$1 = this;
return self__.meta11872;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11871.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11871.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11871.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11871.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11871.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11871.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11871.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11871.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta11872","meta11872",564454386,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11871.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11871.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11871";

cljs.core.async.t_cljs$core$async11871.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7425__auto__,writer__7426__auto__,opt__7427__auto__){
return cljs.core._write.call(null,writer__7426__auto__,"cljs.core.async/t_cljs$core$async11871");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async11871 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async11871(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11872){
return (new cljs.core.async.t_cljs$core$async11871(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11872));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async11871(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10044__auto___11997 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10044__auto___11997,mults,ensure_mult,p){
return (function (){
var f__10045__auto__ = (function (){var switch__9932__auto__ = ((function (c__10044__auto___11997,mults,ensure_mult,p){
return (function (state_11945){
var state_val_11946 = (state_11945[(1)]);
if((state_val_11946 === (7))){
var inst_11941 = (state_11945[(2)]);
var state_11945__$1 = state_11945;
var statearr_11947_11998 = state_11945__$1;
(statearr_11947_11998[(2)] = inst_11941);

(statearr_11947_11998[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11946 === (20))){
var state_11945__$1 = state_11945;
var statearr_11948_11999 = state_11945__$1;
(statearr_11948_11999[(2)] = null);

(statearr_11948_11999[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11946 === (1))){
var state_11945__$1 = state_11945;
var statearr_11949_12000 = state_11945__$1;
(statearr_11949_12000[(2)] = null);

(statearr_11949_12000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11946 === (24))){
var inst_11924 = (state_11945[(7)]);
var inst_11933 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_11924);
var state_11945__$1 = state_11945;
var statearr_11950_12001 = state_11945__$1;
(statearr_11950_12001[(2)] = inst_11933);

(statearr_11950_12001[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11946 === (4))){
var inst_11876 = (state_11945[(8)]);
var inst_11876__$1 = (state_11945[(2)]);
var inst_11877 = (inst_11876__$1 == null);
var state_11945__$1 = (function (){var statearr_11951 = state_11945;
(statearr_11951[(8)] = inst_11876__$1);

return statearr_11951;
})();
if(cljs.core.truth_(inst_11877)){
var statearr_11952_12002 = state_11945__$1;
(statearr_11952_12002[(1)] = (5));

} else {
var statearr_11953_12003 = state_11945__$1;
(statearr_11953_12003[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11946 === (15))){
var inst_11918 = (state_11945[(2)]);
var state_11945__$1 = state_11945;
var statearr_11954_12004 = state_11945__$1;
(statearr_11954_12004[(2)] = inst_11918);

(statearr_11954_12004[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11946 === (21))){
var inst_11938 = (state_11945[(2)]);
var state_11945__$1 = (function (){var statearr_11955 = state_11945;
(statearr_11955[(9)] = inst_11938);

return statearr_11955;
})();
var statearr_11956_12005 = state_11945__$1;
(statearr_11956_12005[(2)] = null);

(statearr_11956_12005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11946 === (13))){
var inst_11900 = (state_11945[(10)]);
var inst_11902 = cljs.core.chunked_seq_QMARK_.call(null,inst_11900);
var state_11945__$1 = state_11945;
if(inst_11902){
var statearr_11957_12006 = state_11945__$1;
(statearr_11957_12006[(1)] = (16));

} else {
var statearr_11958_12007 = state_11945__$1;
(statearr_11958_12007[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11946 === (22))){
var inst_11930 = (state_11945[(2)]);
var state_11945__$1 = state_11945;
if(cljs.core.truth_(inst_11930)){
var statearr_11959_12008 = state_11945__$1;
(statearr_11959_12008[(1)] = (23));

} else {
var statearr_11960_12009 = state_11945__$1;
(statearr_11960_12009[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11946 === (6))){
var inst_11876 = (state_11945[(8)]);
var inst_11926 = (state_11945[(11)]);
var inst_11924 = (state_11945[(7)]);
var inst_11924__$1 = topic_fn.call(null,inst_11876);
var inst_11925 = cljs.core.deref.call(null,mults);
var inst_11926__$1 = cljs.core.get.call(null,inst_11925,inst_11924__$1);
var state_11945__$1 = (function (){var statearr_11961 = state_11945;
(statearr_11961[(11)] = inst_11926__$1);

(statearr_11961[(7)] = inst_11924__$1);

return statearr_11961;
})();
if(cljs.core.truth_(inst_11926__$1)){
var statearr_11962_12010 = state_11945__$1;
(statearr_11962_12010[(1)] = (19));

} else {
var statearr_11963_12011 = state_11945__$1;
(statearr_11963_12011[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11946 === (25))){
var inst_11935 = (state_11945[(2)]);
var state_11945__$1 = state_11945;
var statearr_11964_12012 = state_11945__$1;
(statearr_11964_12012[(2)] = inst_11935);

(statearr_11964_12012[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11946 === (17))){
var inst_11900 = (state_11945[(10)]);
var inst_11909 = cljs.core.first.call(null,inst_11900);
var inst_11910 = cljs.core.async.muxch_STAR_.call(null,inst_11909);
var inst_11911 = cljs.core.async.close_BANG_.call(null,inst_11910);
var inst_11912 = cljs.core.next.call(null,inst_11900);
var inst_11886 = inst_11912;
var inst_11887 = null;
var inst_11888 = (0);
var inst_11889 = (0);
var state_11945__$1 = (function (){var statearr_11965 = state_11945;
(statearr_11965[(12)] = inst_11888);

(statearr_11965[(13)] = inst_11887);

(statearr_11965[(14)] = inst_11889);

(statearr_11965[(15)] = inst_11886);

(statearr_11965[(16)] = inst_11911);

return statearr_11965;
})();
var statearr_11966_12013 = state_11945__$1;
(statearr_11966_12013[(2)] = null);

(statearr_11966_12013[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11946 === (3))){
var inst_11943 = (state_11945[(2)]);
var state_11945__$1 = state_11945;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11945__$1,inst_11943);
} else {
if((state_val_11946 === (12))){
var inst_11920 = (state_11945[(2)]);
var state_11945__$1 = state_11945;
var statearr_11967_12014 = state_11945__$1;
(statearr_11967_12014[(2)] = inst_11920);

(statearr_11967_12014[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11946 === (2))){
var state_11945__$1 = state_11945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11945__$1,(4),ch);
} else {
if((state_val_11946 === (23))){
var state_11945__$1 = state_11945;
var statearr_11968_12015 = state_11945__$1;
(statearr_11968_12015[(2)] = null);

(statearr_11968_12015[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11946 === (19))){
var inst_11876 = (state_11945[(8)]);
var inst_11926 = (state_11945[(11)]);
var inst_11928 = cljs.core.async.muxch_STAR_.call(null,inst_11926);
var state_11945__$1 = state_11945;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11945__$1,(22),inst_11928,inst_11876);
} else {
if((state_val_11946 === (11))){
var inst_11900 = (state_11945[(10)]);
var inst_11886 = (state_11945[(15)]);
var inst_11900__$1 = cljs.core.seq.call(null,inst_11886);
var state_11945__$1 = (function (){var statearr_11969 = state_11945;
(statearr_11969[(10)] = inst_11900__$1);

return statearr_11969;
})();
if(inst_11900__$1){
var statearr_11970_12016 = state_11945__$1;
(statearr_11970_12016[(1)] = (13));

} else {
var statearr_11971_12017 = state_11945__$1;
(statearr_11971_12017[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11946 === (9))){
var inst_11922 = (state_11945[(2)]);
var state_11945__$1 = state_11945;
var statearr_11972_12018 = state_11945__$1;
(statearr_11972_12018[(2)] = inst_11922);

(statearr_11972_12018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11946 === (5))){
var inst_11883 = cljs.core.deref.call(null,mults);
var inst_11884 = cljs.core.vals.call(null,inst_11883);
var inst_11885 = cljs.core.seq.call(null,inst_11884);
var inst_11886 = inst_11885;
var inst_11887 = null;
var inst_11888 = (0);
var inst_11889 = (0);
var state_11945__$1 = (function (){var statearr_11973 = state_11945;
(statearr_11973[(12)] = inst_11888);

(statearr_11973[(13)] = inst_11887);

(statearr_11973[(14)] = inst_11889);

(statearr_11973[(15)] = inst_11886);

return statearr_11973;
})();
var statearr_11974_12019 = state_11945__$1;
(statearr_11974_12019[(2)] = null);

(statearr_11974_12019[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11946 === (14))){
var state_11945__$1 = state_11945;
var statearr_11978_12020 = state_11945__$1;
(statearr_11978_12020[(2)] = null);

(statearr_11978_12020[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11946 === (16))){
var inst_11900 = (state_11945[(10)]);
var inst_11904 = cljs.core.chunk_first.call(null,inst_11900);
var inst_11905 = cljs.core.chunk_rest.call(null,inst_11900);
var inst_11906 = cljs.core.count.call(null,inst_11904);
var inst_11886 = inst_11905;
var inst_11887 = inst_11904;
var inst_11888 = inst_11906;
var inst_11889 = (0);
var state_11945__$1 = (function (){var statearr_11979 = state_11945;
(statearr_11979[(12)] = inst_11888);

(statearr_11979[(13)] = inst_11887);

(statearr_11979[(14)] = inst_11889);

(statearr_11979[(15)] = inst_11886);

return statearr_11979;
})();
var statearr_11980_12021 = state_11945__$1;
(statearr_11980_12021[(2)] = null);

(statearr_11980_12021[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11946 === (10))){
var inst_11888 = (state_11945[(12)]);
var inst_11887 = (state_11945[(13)]);
var inst_11889 = (state_11945[(14)]);
var inst_11886 = (state_11945[(15)]);
var inst_11894 = cljs.core._nth.call(null,inst_11887,inst_11889);
var inst_11895 = cljs.core.async.muxch_STAR_.call(null,inst_11894);
var inst_11896 = cljs.core.async.close_BANG_.call(null,inst_11895);
var inst_11897 = (inst_11889 + (1));
var tmp11975 = inst_11888;
var tmp11976 = inst_11887;
var tmp11977 = inst_11886;
var inst_11886__$1 = tmp11977;
var inst_11887__$1 = tmp11976;
var inst_11888__$1 = tmp11975;
var inst_11889__$1 = inst_11897;
var state_11945__$1 = (function (){var statearr_11981 = state_11945;
(statearr_11981[(12)] = inst_11888__$1);

(statearr_11981[(13)] = inst_11887__$1);

(statearr_11981[(14)] = inst_11889__$1);

(statearr_11981[(17)] = inst_11896);

(statearr_11981[(15)] = inst_11886__$1);

return statearr_11981;
})();
var statearr_11982_12022 = state_11945__$1;
(statearr_11982_12022[(2)] = null);

(statearr_11982_12022[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11946 === (18))){
var inst_11915 = (state_11945[(2)]);
var state_11945__$1 = state_11945;
var statearr_11983_12023 = state_11945__$1;
(statearr_11983_12023[(2)] = inst_11915);

(statearr_11983_12023[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11946 === (8))){
var inst_11888 = (state_11945[(12)]);
var inst_11889 = (state_11945[(14)]);
var inst_11891 = (inst_11889 < inst_11888);
var inst_11892 = inst_11891;
var state_11945__$1 = state_11945;
if(cljs.core.truth_(inst_11892)){
var statearr_11984_12024 = state_11945__$1;
(statearr_11984_12024[(1)] = (10));

} else {
var statearr_11985_12025 = state_11945__$1;
(statearr_11985_12025[(1)] = (11));

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
});})(c__10044__auto___11997,mults,ensure_mult,p))
;
return ((function (switch__9932__auto__,c__10044__auto___11997,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__9933__auto__ = null;
var cljs$core$async$state_machine__9933__auto____0 = (function (){
var statearr_11989 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11989[(0)] = cljs$core$async$state_machine__9933__auto__);

(statearr_11989[(1)] = (1));

return statearr_11989;
});
var cljs$core$async$state_machine__9933__auto____1 = (function (state_11945){
while(true){
var ret_value__9934__auto__ = (function (){try{while(true){
var result__9935__auto__ = switch__9932__auto__.call(null,state_11945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9935__auto__;
}
break;
}
}catch (e11990){if((e11990 instanceof Object)){
var ex__9936__auto__ = e11990;
var statearr_11991_12026 = state_11945;
(statearr_11991_12026[(5)] = ex__9936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11990;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12027 = state_11945;
state_11945 = G__12027;
continue;
} else {
return ret_value__9934__auto__;
}
break;
}
});
cljs$core$async$state_machine__9933__auto__ = function(state_11945){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9933__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9933__auto____1.call(this,state_11945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9933__auto____0;
cljs$core$async$state_machine__9933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9933__auto____1;
return cljs$core$async$state_machine__9933__auto__;
})()
;})(switch__9932__auto__,c__10044__auto___11997,mults,ensure_mult,p))
})();
var state__10046__auto__ = (function (){var statearr_11992 = f__10045__auto__.call(null);
(statearr_11992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10044__auto___11997);

return statearr_11992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10046__auto__);
});})(c__10044__auto___11997,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args12028 = [];
var len__7923__auto___12031 = arguments.length;
var i__7924__auto___12032 = (0);
while(true){
if((i__7924__auto___12032 < len__7923__auto___12031)){
args12028.push((arguments[i__7924__auto___12032]));

var G__12033 = (i__7924__auto___12032 + (1));
i__7924__auto___12032 = G__12033;
continue;
} else {
}
break;
}

var G__12030 = args12028.length;
switch (G__12030) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12028.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args12035 = [];
var len__7923__auto___12038 = arguments.length;
var i__7924__auto___12039 = (0);
while(true){
if((i__7924__auto___12039 < len__7923__auto___12038)){
args12035.push((arguments[i__7924__auto___12039]));

var G__12040 = (i__7924__auto___12039 + (1));
i__7924__auto___12039 = G__12040;
continue;
} else {
}
break;
}

var G__12037 = args12035.length;
switch (G__12037) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12035.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args12042 = [];
var len__7923__auto___12113 = arguments.length;
var i__7924__auto___12114 = (0);
while(true){
if((i__7924__auto___12114 < len__7923__auto___12113)){
args12042.push((arguments[i__7924__auto___12114]));

var G__12115 = (i__7924__auto___12114 + (1));
i__7924__auto___12114 = G__12115;
continue;
} else {
}
break;
}

var G__12044 = args12042.length;
switch (G__12044) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12042.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__10044__auto___12117 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10044__auto___12117,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__10045__auto__ = (function (){var switch__9932__auto__ = ((function (c__10044__auto___12117,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_12083){
var state_val_12084 = (state_12083[(1)]);
if((state_val_12084 === (7))){
var state_12083__$1 = state_12083;
var statearr_12085_12118 = state_12083__$1;
(statearr_12085_12118[(2)] = null);

(statearr_12085_12118[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12084 === (1))){
var state_12083__$1 = state_12083;
var statearr_12086_12119 = state_12083__$1;
(statearr_12086_12119[(2)] = null);

(statearr_12086_12119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12084 === (4))){
var inst_12047 = (state_12083[(7)]);
var inst_12049 = (inst_12047 < cnt);
var state_12083__$1 = state_12083;
if(cljs.core.truth_(inst_12049)){
var statearr_12087_12120 = state_12083__$1;
(statearr_12087_12120[(1)] = (6));

} else {
var statearr_12088_12121 = state_12083__$1;
(statearr_12088_12121[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12084 === (15))){
var inst_12079 = (state_12083[(2)]);
var state_12083__$1 = state_12083;
var statearr_12089_12122 = state_12083__$1;
(statearr_12089_12122[(2)] = inst_12079);

(statearr_12089_12122[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12084 === (13))){
var inst_12072 = cljs.core.async.close_BANG_.call(null,out);
var state_12083__$1 = state_12083;
var statearr_12090_12123 = state_12083__$1;
(statearr_12090_12123[(2)] = inst_12072);

(statearr_12090_12123[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12084 === (6))){
var state_12083__$1 = state_12083;
var statearr_12091_12124 = state_12083__$1;
(statearr_12091_12124[(2)] = null);

(statearr_12091_12124[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12084 === (3))){
var inst_12081 = (state_12083[(2)]);
var state_12083__$1 = state_12083;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12083__$1,inst_12081);
} else {
if((state_val_12084 === (12))){
var inst_12069 = (state_12083[(8)]);
var inst_12069__$1 = (state_12083[(2)]);
var inst_12070 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12069__$1);
var state_12083__$1 = (function (){var statearr_12092 = state_12083;
(statearr_12092[(8)] = inst_12069__$1);

return statearr_12092;
})();
if(cljs.core.truth_(inst_12070)){
var statearr_12093_12125 = state_12083__$1;
(statearr_12093_12125[(1)] = (13));

} else {
var statearr_12094_12126 = state_12083__$1;
(statearr_12094_12126[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12084 === (2))){
var inst_12046 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_12047 = (0);
var state_12083__$1 = (function (){var statearr_12095 = state_12083;
(statearr_12095[(7)] = inst_12047);

(statearr_12095[(9)] = inst_12046);

return statearr_12095;
})();
var statearr_12096_12127 = state_12083__$1;
(statearr_12096_12127[(2)] = null);

(statearr_12096_12127[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12084 === (11))){
var inst_12047 = (state_12083[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12083,(10),Object,null,(9));
var inst_12056 = chs__$1.call(null,inst_12047);
var inst_12057 = done.call(null,inst_12047);
var inst_12058 = cljs.core.async.take_BANG_.call(null,inst_12056,inst_12057);
var state_12083__$1 = state_12083;
var statearr_12097_12128 = state_12083__$1;
(statearr_12097_12128[(2)] = inst_12058);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12083__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12084 === (9))){
var inst_12047 = (state_12083[(7)]);
var inst_12060 = (state_12083[(2)]);
var inst_12061 = (inst_12047 + (1));
var inst_12047__$1 = inst_12061;
var state_12083__$1 = (function (){var statearr_12098 = state_12083;
(statearr_12098[(10)] = inst_12060);

(statearr_12098[(7)] = inst_12047__$1);

return statearr_12098;
})();
var statearr_12099_12129 = state_12083__$1;
(statearr_12099_12129[(2)] = null);

(statearr_12099_12129[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12084 === (5))){
var inst_12067 = (state_12083[(2)]);
var state_12083__$1 = (function (){var statearr_12100 = state_12083;
(statearr_12100[(11)] = inst_12067);

return statearr_12100;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12083__$1,(12),dchan);
} else {
if((state_val_12084 === (14))){
var inst_12069 = (state_12083[(8)]);
var inst_12074 = cljs.core.apply.call(null,f,inst_12069);
var state_12083__$1 = state_12083;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12083__$1,(16),out,inst_12074);
} else {
if((state_val_12084 === (16))){
var inst_12076 = (state_12083[(2)]);
var state_12083__$1 = (function (){var statearr_12101 = state_12083;
(statearr_12101[(12)] = inst_12076);

return statearr_12101;
})();
var statearr_12102_12130 = state_12083__$1;
(statearr_12102_12130[(2)] = null);

(statearr_12102_12130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12084 === (10))){
var inst_12051 = (state_12083[(2)]);
var inst_12052 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_12083__$1 = (function (){var statearr_12103 = state_12083;
(statearr_12103[(13)] = inst_12051);

return statearr_12103;
})();
var statearr_12104_12131 = state_12083__$1;
(statearr_12104_12131[(2)] = inst_12052);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12083__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12084 === (8))){
var inst_12065 = (state_12083[(2)]);
var state_12083__$1 = state_12083;
var statearr_12105_12132 = state_12083__$1;
(statearr_12105_12132[(2)] = inst_12065);

(statearr_12105_12132[(1)] = (5));


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
});})(c__10044__auto___12117,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__9932__auto__,c__10044__auto___12117,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__9933__auto__ = null;
var cljs$core$async$state_machine__9933__auto____0 = (function (){
var statearr_12109 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12109[(0)] = cljs$core$async$state_machine__9933__auto__);

(statearr_12109[(1)] = (1));

return statearr_12109;
});
var cljs$core$async$state_machine__9933__auto____1 = (function (state_12083){
while(true){
var ret_value__9934__auto__ = (function (){try{while(true){
var result__9935__auto__ = switch__9932__auto__.call(null,state_12083);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9935__auto__;
}
break;
}
}catch (e12110){if((e12110 instanceof Object)){
var ex__9936__auto__ = e12110;
var statearr_12111_12133 = state_12083;
(statearr_12111_12133[(5)] = ex__9936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12083);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12110;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12134 = state_12083;
state_12083 = G__12134;
continue;
} else {
return ret_value__9934__auto__;
}
break;
}
});
cljs$core$async$state_machine__9933__auto__ = function(state_12083){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9933__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9933__auto____1.call(this,state_12083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9933__auto____0;
cljs$core$async$state_machine__9933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9933__auto____1;
return cljs$core$async$state_machine__9933__auto__;
})()
;})(switch__9932__auto__,c__10044__auto___12117,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__10046__auto__ = (function (){var statearr_12112 = f__10045__auto__.call(null);
(statearr_12112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10044__auto___12117);

return statearr_12112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10046__auto__);
});})(c__10044__auto___12117,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args12136 = [];
var len__7923__auto___12194 = arguments.length;
var i__7924__auto___12195 = (0);
while(true){
if((i__7924__auto___12195 < len__7923__auto___12194)){
args12136.push((arguments[i__7924__auto___12195]));

var G__12196 = (i__7924__auto___12195 + (1));
i__7924__auto___12195 = G__12196;
continue;
} else {
}
break;
}

var G__12138 = args12136.length;
switch (G__12138) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12136.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10044__auto___12198 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10044__auto___12198,out){
return (function (){
var f__10045__auto__ = (function (){var switch__9932__auto__ = ((function (c__10044__auto___12198,out){
return (function (state_12170){
var state_val_12171 = (state_12170[(1)]);
if((state_val_12171 === (7))){
var inst_12150 = (state_12170[(7)]);
var inst_12149 = (state_12170[(8)]);
var inst_12149__$1 = (state_12170[(2)]);
var inst_12150__$1 = cljs.core.nth.call(null,inst_12149__$1,(0),null);
var inst_12151 = cljs.core.nth.call(null,inst_12149__$1,(1),null);
var inst_12152 = (inst_12150__$1 == null);
var state_12170__$1 = (function (){var statearr_12172 = state_12170;
(statearr_12172[(7)] = inst_12150__$1);

(statearr_12172[(8)] = inst_12149__$1);

(statearr_12172[(9)] = inst_12151);

return statearr_12172;
})();
if(cljs.core.truth_(inst_12152)){
var statearr_12173_12199 = state_12170__$1;
(statearr_12173_12199[(1)] = (8));

} else {
var statearr_12174_12200 = state_12170__$1;
(statearr_12174_12200[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12171 === (1))){
var inst_12139 = cljs.core.vec.call(null,chs);
var inst_12140 = inst_12139;
var state_12170__$1 = (function (){var statearr_12175 = state_12170;
(statearr_12175[(10)] = inst_12140);

return statearr_12175;
})();
var statearr_12176_12201 = state_12170__$1;
(statearr_12176_12201[(2)] = null);

(statearr_12176_12201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12171 === (4))){
var inst_12140 = (state_12170[(10)]);
var state_12170__$1 = state_12170;
return cljs.core.async.ioc_alts_BANG_.call(null,state_12170__$1,(7),inst_12140);
} else {
if((state_val_12171 === (6))){
var inst_12166 = (state_12170[(2)]);
var state_12170__$1 = state_12170;
var statearr_12177_12202 = state_12170__$1;
(statearr_12177_12202[(2)] = inst_12166);

(statearr_12177_12202[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12171 === (3))){
var inst_12168 = (state_12170[(2)]);
var state_12170__$1 = state_12170;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12170__$1,inst_12168);
} else {
if((state_val_12171 === (2))){
var inst_12140 = (state_12170[(10)]);
var inst_12142 = cljs.core.count.call(null,inst_12140);
var inst_12143 = (inst_12142 > (0));
var state_12170__$1 = state_12170;
if(cljs.core.truth_(inst_12143)){
var statearr_12179_12203 = state_12170__$1;
(statearr_12179_12203[(1)] = (4));

} else {
var statearr_12180_12204 = state_12170__$1;
(statearr_12180_12204[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12171 === (11))){
var inst_12140 = (state_12170[(10)]);
var inst_12159 = (state_12170[(2)]);
var tmp12178 = inst_12140;
var inst_12140__$1 = tmp12178;
var state_12170__$1 = (function (){var statearr_12181 = state_12170;
(statearr_12181[(10)] = inst_12140__$1);

(statearr_12181[(11)] = inst_12159);

return statearr_12181;
})();
var statearr_12182_12205 = state_12170__$1;
(statearr_12182_12205[(2)] = null);

(statearr_12182_12205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12171 === (9))){
var inst_12150 = (state_12170[(7)]);
var state_12170__$1 = state_12170;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12170__$1,(11),out,inst_12150);
} else {
if((state_val_12171 === (5))){
var inst_12164 = cljs.core.async.close_BANG_.call(null,out);
var state_12170__$1 = state_12170;
var statearr_12183_12206 = state_12170__$1;
(statearr_12183_12206[(2)] = inst_12164);

(statearr_12183_12206[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12171 === (10))){
var inst_12162 = (state_12170[(2)]);
var state_12170__$1 = state_12170;
var statearr_12184_12207 = state_12170__$1;
(statearr_12184_12207[(2)] = inst_12162);

(statearr_12184_12207[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12171 === (8))){
var inst_12150 = (state_12170[(7)]);
var inst_12149 = (state_12170[(8)]);
var inst_12140 = (state_12170[(10)]);
var inst_12151 = (state_12170[(9)]);
var inst_12154 = (function (){var cs = inst_12140;
var vec__12145 = inst_12149;
var v = inst_12150;
var c = inst_12151;
return ((function (cs,vec__12145,v,c,inst_12150,inst_12149,inst_12140,inst_12151,state_val_12171,c__10044__auto___12198,out){
return (function (p1__12135_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__12135_SHARP_);
});
;})(cs,vec__12145,v,c,inst_12150,inst_12149,inst_12140,inst_12151,state_val_12171,c__10044__auto___12198,out))
})();
var inst_12155 = cljs.core.filterv.call(null,inst_12154,inst_12140);
var inst_12140__$1 = inst_12155;
var state_12170__$1 = (function (){var statearr_12185 = state_12170;
(statearr_12185[(10)] = inst_12140__$1);

return statearr_12185;
})();
var statearr_12186_12208 = state_12170__$1;
(statearr_12186_12208[(2)] = null);

(statearr_12186_12208[(1)] = (2));


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
});})(c__10044__auto___12198,out))
;
return ((function (switch__9932__auto__,c__10044__auto___12198,out){
return (function() {
var cljs$core$async$state_machine__9933__auto__ = null;
var cljs$core$async$state_machine__9933__auto____0 = (function (){
var statearr_12190 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12190[(0)] = cljs$core$async$state_machine__9933__auto__);

(statearr_12190[(1)] = (1));

return statearr_12190;
});
var cljs$core$async$state_machine__9933__auto____1 = (function (state_12170){
while(true){
var ret_value__9934__auto__ = (function (){try{while(true){
var result__9935__auto__ = switch__9932__auto__.call(null,state_12170);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9935__auto__;
}
break;
}
}catch (e12191){if((e12191 instanceof Object)){
var ex__9936__auto__ = e12191;
var statearr_12192_12209 = state_12170;
(statearr_12192_12209[(5)] = ex__9936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12170);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12191;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12210 = state_12170;
state_12170 = G__12210;
continue;
} else {
return ret_value__9934__auto__;
}
break;
}
});
cljs$core$async$state_machine__9933__auto__ = function(state_12170){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9933__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9933__auto____1.call(this,state_12170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9933__auto____0;
cljs$core$async$state_machine__9933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9933__auto____1;
return cljs$core$async$state_machine__9933__auto__;
})()
;})(switch__9932__auto__,c__10044__auto___12198,out))
})();
var state__10046__auto__ = (function (){var statearr_12193 = f__10045__auto__.call(null);
(statearr_12193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10044__auto___12198);

return statearr_12193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10046__auto__);
});})(c__10044__auto___12198,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args12211 = [];
var len__7923__auto___12260 = arguments.length;
var i__7924__auto___12261 = (0);
while(true){
if((i__7924__auto___12261 < len__7923__auto___12260)){
args12211.push((arguments[i__7924__auto___12261]));

var G__12262 = (i__7924__auto___12261 + (1));
i__7924__auto___12261 = G__12262;
continue;
} else {
}
break;
}

var G__12213 = args12211.length;
switch (G__12213) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12211.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10044__auto___12264 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10044__auto___12264,out){
return (function (){
var f__10045__auto__ = (function (){var switch__9932__auto__ = ((function (c__10044__auto___12264,out){
return (function (state_12237){
var state_val_12238 = (state_12237[(1)]);
if((state_val_12238 === (7))){
var inst_12219 = (state_12237[(7)]);
var inst_12219__$1 = (state_12237[(2)]);
var inst_12220 = (inst_12219__$1 == null);
var inst_12221 = cljs.core.not.call(null,inst_12220);
var state_12237__$1 = (function (){var statearr_12239 = state_12237;
(statearr_12239[(7)] = inst_12219__$1);

return statearr_12239;
})();
if(inst_12221){
var statearr_12240_12265 = state_12237__$1;
(statearr_12240_12265[(1)] = (8));

} else {
var statearr_12241_12266 = state_12237__$1;
(statearr_12241_12266[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12238 === (1))){
var inst_12214 = (0);
var state_12237__$1 = (function (){var statearr_12242 = state_12237;
(statearr_12242[(8)] = inst_12214);

return statearr_12242;
})();
var statearr_12243_12267 = state_12237__$1;
(statearr_12243_12267[(2)] = null);

(statearr_12243_12267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12238 === (4))){
var state_12237__$1 = state_12237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12237__$1,(7),ch);
} else {
if((state_val_12238 === (6))){
var inst_12232 = (state_12237[(2)]);
var state_12237__$1 = state_12237;
var statearr_12244_12268 = state_12237__$1;
(statearr_12244_12268[(2)] = inst_12232);

(statearr_12244_12268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12238 === (3))){
var inst_12234 = (state_12237[(2)]);
var inst_12235 = cljs.core.async.close_BANG_.call(null,out);
var state_12237__$1 = (function (){var statearr_12245 = state_12237;
(statearr_12245[(9)] = inst_12234);

return statearr_12245;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12237__$1,inst_12235);
} else {
if((state_val_12238 === (2))){
var inst_12214 = (state_12237[(8)]);
var inst_12216 = (inst_12214 < n);
var state_12237__$1 = state_12237;
if(cljs.core.truth_(inst_12216)){
var statearr_12246_12269 = state_12237__$1;
(statearr_12246_12269[(1)] = (4));

} else {
var statearr_12247_12270 = state_12237__$1;
(statearr_12247_12270[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12238 === (11))){
var inst_12214 = (state_12237[(8)]);
var inst_12224 = (state_12237[(2)]);
var inst_12225 = (inst_12214 + (1));
var inst_12214__$1 = inst_12225;
var state_12237__$1 = (function (){var statearr_12248 = state_12237;
(statearr_12248[(8)] = inst_12214__$1);

(statearr_12248[(10)] = inst_12224);

return statearr_12248;
})();
var statearr_12249_12271 = state_12237__$1;
(statearr_12249_12271[(2)] = null);

(statearr_12249_12271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12238 === (9))){
var state_12237__$1 = state_12237;
var statearr_12250_12272 = state_12237__$1;
(statearr_12250_12272[(2)] = null);

(statearr_12250_12272[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12238 === (5))){
var state_12237__$1 = state_12237;
var statearr_12251_12273 = state_12237__$1;
(statearr_12251_12273[(2)] = null);

(statearr_12251_12273[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12238 === (10))){
var inst_12229 = (state_12237[(2)]);
var state_12237__$1 = state_12237;
var statearr_12252_12274 = state_12237__$1;
(statearr_12252_12274[(2)] = inst_12229);

(statearr_12252_12274[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12238 === (8))){
var inst_12219 = (state_12237[(7)]);
var state_12237__$1 = state_12237;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12237__$1,(11),out,inst_12219);
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
});})(c__10044__auto___12264,out))
;
return ((function (switch__9932__auto__,c__10044__auto___12264,out){
return (function() {
var cljs$core$async$state_machine__9933__auto__ = null;
var cljs$core$async$state_machine__9933__auto____0 = (function (){
var statearr_12256 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12256[(0)] = cljs$core$async$state_machine__9933__auto__);

(statearr_12256[(1)] = (1));

return statearr_12256;
});
var cljs$core$async$state_machine__9933__auto____1 = (function (state_12237){
while(true){
var ret_value__9934__auto__ = (function (){try{while(true){
var result__9935__auto__ = switch__9932__auto__.call(null,state_12237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9935__auto__;
}
break;
}
}catch (e12257){if((e12257 instanceof Object)){
var ex__9936__auto__ = e12257;
var statearr_12258_12275 = state_12237;
(statearr_12258_12275[(5)] = ex__9936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12237);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12257;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12276 = state_12237;
state_12237 = G__12276;
continue;
} else {
return ret_value__9934__auto__;
}
break;
}
});
cljs$core$async$state_machine__9933__auto__ = function(state_12237){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9933__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9933__auto____1.call(this,state_12237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9933__auto____0;
cljs$core$async$state_machine__9933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9933__auto____1;
return cljs$core$async$state_machine__9933__auto__;
})()
;})(switch__9932__auto__,c__10044__auto___12264,out))
})();
var state__10046__auto__ = (function (){var statearr_12259 = f__10045__auto__.call(null);
(statearr_12259[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10044__auto___12264);

return statearr_12259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10046__auto__);
});})(c__10044__auto___12264,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async12284 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12284 = (function (f,ch,meta12285){
this.f = f;
this.ch = ch;
this.meta12285 = meta12285;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12284.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12286,meta12285__$1){
var self__ = this;
var _12286__$1 = this;
return (new cljs.core.async.t_cljs$core$async12284(self__.f,self__.ch,meta12285__$1));
});

cljs.core.async.t_cljs$core$async12284.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12286){
var self__ = this;
var _12286__$1 = this;
return self__.meta12285;
});

cljs.core.async.t_cljs$core$async12284.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12284.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12284.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12284.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12284.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async12287 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12287 = (function (f,ch,meta12285,_,fn1,meta12288){
this.f = f;
this.ch = ch;
this.meta12285 = meta12285;
this._ = _;
this.fn1 = fn1;
this.meta12288 = meta12288;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12287.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_12289,meta12288__$1){
var self__ = this;
var _12289__$1 = this;
return (new cljs.core.async.t_cljs$core$async12287(self__.f,self__.ch,self__.meta12285,self__._,self__.fn1,meta12288__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async12287.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_12289){
var self__ = this;
var _12289__$1 = this;
return self__.meta12288;
});})(___$1))
;

cljs.core.async.t_cljs$core$async12287.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12287.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async12287.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async12287.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__12277_SHARP_){
return f1.call(null,(((p1__12277_SHARP_ == null))?null:self__.f.call(null,p1__12277_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async12287.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12285","meta12285",1688620251,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async12284","cljs.core.async/t_cljs$core$async12284",880892345,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta12288","meta12288",1920079232,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async12287.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12287.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12287";

cljs.core.async.t_cljs$core$async12287.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7425__auto__,writer__7426__auto__,opt__7427__auto__){
return cljs.core._write.call(null,writer__7426__auto__,"cljs.core.async/t_cljs$core$async12287");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async12287 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12287(f__$1,ch__$1,meta12285__$1,___$2,fn1__$1,meta12288){
return (new cljs.core.async.t_cljs$core$async12287(f__$1,ch__$1,meta12285__$1,___$2,fn1__$1,meta12288));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async12287(self__.f,self__.ch,self__.meta12285,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6802__auto__ = ret;
if(cljs.core.truth_(and__6802__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__6802__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async12284.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12284.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async12284.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12285","meta12285",1688620251,null)], null);
});

cljs.core.async.t_cljs$core$async12284.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12284.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12284";

cljs.core.async.t_cljs$core$async12284.cljs$lang$ctorPrWriter = (function (this__7425__auto__,writer__7426__auto__,opt__7427__auto__){
return cljs.core._write.call(null,writer__7426__auto__,"cljs.core.async/t_cljs$core$async12284");
});

cljs.core.async.__GT_t_cljs$core$async12284 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12284(f__$1,ch__$1,meta12285){
return (new cljs.core.async.t_cljs$core$async12284(f__$1,ch__$1,meta12285));
});

}

return (new cljs.core.async.t_cljs$core$async12284(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async12293 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12293 = (function (f,ch,meta12294){
this.f = f;
this.ch = ch;
this.meta12294 = meta12294;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12293.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12295,meta12294__$1){
var self__ = this;
var _12295__$1 = this;
return (new cljs.core.async.t_cljs$core$async12293(self__.f,self__.ch,meta12294__$1));
});

cljs.core.async.t_cljs$core$async12293.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12295){
var self__ = this;
var _12295__$1 = this;
return self__.meta12294;
});

cljs.core.async.t_cljs$core$async12293.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12293.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12293.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12293.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async12293.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12293.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async12293.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12294","meta12294",141018739,null)], null);
});

cljs.core.async.t_cljs$core$async12293.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12293.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12293";

cljs.core.async.t_cljs$core$async12293.cljs$lang$ctorPrWriter = (function (this__7425__auto__,writer__7426__auto__,opt__7427__auto__){
return cljs.core._write.call(null,writer__7426__auto__,"cljs.core.async/t_cljs$core$async12293");
});

cljs.core.async.__GT_t_cljs$core$async12293 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async12293(f__$1,ch__$1,meta12294){
return (new cljs.core.async.t_cljs$core$async12293(f__$1,ch__$1,meta12294));
});

}

return (new cljs.core.async.t_cljs$core$async12293(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async12299 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12299 = (function (p,ch,meta12300){
this.p = p;
this.ch = ch;
this.meta12300 = meta12300;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12301,meta12300__$1){
var self__ = this;
var _12301__$1 = this;
return (new cljs.core.async.t_cljs$core$async12299(self__.p,self__.ch,meta12300__$1));
});

cljs.core.async.t_cljs$core$async12299.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12301){
var self__ = this;
var _12301__$1 = this;
return self__.meta12300;
});

cljs.core.async.t_cljs$core$async12299.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12299.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12299.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12299.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12299.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async12299.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12299.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async12299.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12300","meta12300",127207746,null)], null);
});

cljs.core.async.t_cljs$core$async12299.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12299.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12299";

cljs.core.async.t_cljs$core$async12299.cljs$lang$ctorPrWriter = (function (this__7425__auto__,writer__7426__auto__,opt__7427__auto__){
return cljs.core._write.call(null,writer__7426__auto__,"cljs.core.async/t_cljs$core$async12299");
});

cljs.core.async.__GT_t_cljs$core$async12299 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async12299(p__$1,ch__$1,meta12300){
return (new cljs.core.async.t_cljs$core$async12299(p__$1,ch__$1,meta12300));
});

}

return (new cljs.core.async.t_cljs$core$async12299(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args12302 = [];
var len__7923__auto___12346 = arguments.length;
var i__7924__auto___12347 = (0);
while(true){
if((i__7924__auto___12347 < len__7923__auto___12346)){
args12302.push((arguments[i__7924__auto___12347]));

var G__12348 = (i__7924__auto___12347 + (1));
i__7924__auto___12347 = G__12348;
continue;
} else {
}
break;
}

var G__12304 = args12302.length;
switch (G__12304) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12302.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10044__auto___12350 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10044__auto___12350,out){
return (function (){
var f__10045__auto__ = (function (){var switch__9932__auto__ = ((function (c__10044__auto___12350,out){
return (function (state_12325){
var state_val_12326 = (state_12325[(1)]);
if((state_val_12326 === (7))){
var inst_12321 = (state_12325[(2)]);
var state_12325__$1 = state_12325;
var statearr_12327_12351 = state_12325__$1;
(statearr_12327_12351[(2)] = inst_12321);

(statearr_12327_12351[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12326 === (1))){
var state_12325__$1 = state_12325;
var statearr_12328_12352 = state_12325__$1;
(statearr_12328_12352[(2)] = null);

(statearr_12328_12352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12326 === (4))){
var inst_12307 = (state_12325[(7)]);
var inst_12307__$1 = (state_12325[(2)]);
var inst_12308 = (inst_12307__$1 == null);
var state_12325__$1 = (function (){var statearr_12329 = state_12325;
(statearr_12329[(7)] = inst_12307__$1);

return statearr_12329;
})();
if(cljs.core.truth_(inst_12308)){
var statearr_12330_12353 = state_12325__$1;
(statearr_12330_12353[(1)] = (5));

} else {
var statearr_12331_12354 = state_12325__$1;
(statearr_12331_12354[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12326 === (6))){
var inst_12307 = (state_12325[(7)]);
var inst_12312 = p.call(null,inst_12307);
var state_12325__$1 = state_12325;
if(cljs.core.truth_(inst_12312)){
var statearr_12332_12355 = state_12325__$1;
(statearr_12332_12355[(1)] = (8));

} else {
var statearr_12333_12356 = state_12325__$1;
(statearr_12333_12356[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12326 === (3))){
var inst_12323 = (state_12325[(2)]);
var state_12325__$1 = state_12325;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12325__$1,inst_12323);
} else {
if((state_val_12326 === (2))){
var state_12325__$1 = state_12325;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12325__$1,(4),ch);
} else {
if((state_val_12326 === (11))){
var inst_12315 = (state_12325[(2)]);
var state_12325__$1 = state_12325;
var statearr_12334_12357 = state_12325__$1;
(statearr_12334_12357[(2)] = inst_12315);

(statearr_12334_12357[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12326 === (9))){
var state_12325__$1 = state_12325;
var statearr_12335_12358 = state_12325__$1;
(statearr_12335_12358[(2)] = null);

(statearr_12335_12358[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12326 === (5))){
var inst_12310 = cljs.core.async.close_BANG_.call(null,out);
var state_12325__$1 = state_12325;
var statearr_12336_12359 = state_12325__$1;
(statearr_12336_12359[(2)] = inst_12310);

(statearr_12336_12359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12326 === (10))){
var inst_12318 = (state_12325[(2)]);
var state_12325__$1 = (function (){var statearr_12337 = state_12325;
(statearr_12337[(8)] = inst_12318);

return statearr_12337;
})();
var statearr_12338_12360 = state_12325__$1;
(statearr_12338_12360[(2)] = null);

(statearr_12338_12360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12326 === (8))){
var inst_12307 = (state_12325[(7)]);
var state_12325__$1 = state_12325;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12325__$1,(11),out,inst_12307);
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
});})(c__10044__auto___12350,out))
;
return ((function (switch__9932__auto__,c__10044__auto___12350,out){
return (function() {
var cljs$core$async$state_machine__9933__auto__ = null;
var cljs$core$async$state_machine__9933__auto____0 = (function (){
var statearr_12342 = [null,null,null,null,null,null,null,null,null];
(statearr_12342[(0)] = cljs$core$async$state_machine__9933__auto__);

(statearr_12342[(1)] = (1));

return statearr_12342;
});
var cljs$core$async$state_machine__9933__auto____1 = (function (state_12325){
while(true){
var ret_value__9934__auto__ = (function (){try{while(true){
var result__9935__auto__ = switch__9932__auto__.call(null,state_12325);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9935__auto__;
}
break;
}
}catch (e12343){if((e12343 instanceof Object)){
var ex__9936__auto__ = e12343;
var statearr_12344_12361 = state_12325;
(statearr_12344_12361[(5)] = ex__9936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12325);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12343;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12362 = state_12325;
state_12325 = G__12362;
continue;
} else {
return ret_value__9934__auto__;
}
break;
}
});
cljs$core$async$state_machine__9933__auto__ = function(state_12325){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9933__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9933__auto____1.call(this,state_12325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9933__auto____0;
cljs$core$async$state_machine__9933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9933__auto____1;
return cljs$core$async$state_machine__9933__auto__;
})()
;})(switch__9932__auto__,c__10044__auto___12350,out))
})();
var state__10046__auto__ = (function (){var statearr_12345 = f__10045__auto__.call(null);
(statearr_12345[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10044__auto___12350);

return statearr_12345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10046__auto__);
});})(c__10044__auto___12350,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args12363 = [];
var len__7923__auto___12366 = arguments.length;
var i__7924__auto___12367 = (0);
while(true){
if((i__7924__auto___12367 < len__7923__auto___12366)){
args12363.push((arguments[i__7924__auto___12367]));

var G__12368 = (i__7924__auto___12367 + (1));
i__7924__auto___12367 = G__12368;
continue;
} else {
}
break;
}

var G__12365 = args12363.length;
switch (G__12365) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12363.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__10044__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10044__auto__){
return (function (){
var f__10045__auto__ = (function (){var switch__9932__auto__ = ((function (c__10044__auto__){
return (function (state_12535){
var state_val_12536 = (state_12535[(1)]);
if((state_val_12536 === (7))){
var inst_12531 = (state_12535[(2)]);
var state_12535__$1 = state_12535;
var statearr_12537_12578 = state_12535__$1;
(statearr_12537_12578[(2)] = inst_12531);

(statearr_12537_12578[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12536 === (20))){
var inst_12501 = (state_12535[(7)]);
var inst_12512 = (state_12535[(2)]);
var inst_12513 = cljs.core.next.call(null,inst_12501);
var inst_12487 = inst_12513;
var inst_12488 = null;
var inst_12489 = (0);
var inst_12490 = (0);
var state_12535__$1 = (function (){var statearr_12538 = state_12535;
(statearr_12538[(8)] = inst_12489);

(statearr_12538[(9)] = inst_12490);

(statearr_12538[(10)] = inst_12488);

(statearr_12538[(11)] = inst_12487);

(statearr_12538[(12)] = inst_12512);

return statearr_12538;
})();
var statearr_12539_12579 = state_12535__$1;
(statearr_12539_12579[(2)] = null);

(statearr_12539_12579[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12536 === (1))){
var state_12535__$1 = state_12535;
var statearr_12540_12580 = state_12535__$1;
(statearr_12540_12580[(2)] = null);

(statearr_12540_12580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12536 === (4))){
var inst_12476 = (state_12535[(13)]);
var inst_12476__$1 = (state_12535[(2)]);
var inst_12477 = (inst_12476__$1 == null);
var state_12535__$1 = (function (){var statearr_12541 = state_12535;
(statearr_12541[(13)] = inst_12476__$1);

return statearr_12541;
})();
if(cljs.core.truth_(inst_12477)){
var statearr_12542_12581 = state_12535__$1;
(statearr_12542_12581[(1)] = (5));

} else {
var statearr_12543_12582 = state_12535__$1;
(statearr_12543_12582[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12536 === (15))){
var state_12535__$1 = state_12535;
var statearr_12547_12583 = state_12535__$1;
(statearr_12547_12583[(2)] = null);

(statearr_12547_12583[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12536 === (21))){
var state_12535__$1 = state_12535;
var statearr_12548_12584 = state_12535__$1;
(statearr_12548_12584[(2)] = null);

(statearr_12548_12584[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12536 === (13))){
var inst_12489 = (state_12535[(8)]);
var inst_12490 = (state_12535[(9)]);
var inst_12488 = (state_12535[(10)]);
var inst_12487 = (state_12535[(11)]);
var inst_12497 = (state_12535[(2)]);
var inst_12498 = (inst_12490 + (1));
var tmp12544 = inst_12489;
var tmp12545 = inst_12488;
var tmp12546 = inst_12487;
var inst_12487__$1 = tmp12546;
var inst_12488__$1 = tmp12545;
var inst_12489__$1 = tmp12544;
var inst_12490__$1 = inst_12498;
var state_12535__$1 = (function (){var statearr_12549 = state_12535;
(statearr_12549[(8)] = inst_12489__$1);

(statearr_12549[(9)] = inst_12490__$1);

(statearr_12549[(10)] = inst_12488__$1);

(statearr_12549[(11)] = inst_12487__$1);

(statearr_12549[(14)] = inst_12497);

return statearr_12549;
})();
var statearr_12550_12585 = state_12535__$1;
(statearr_12550_12585[(2)] = null);

(statearr_12550_12585[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12536 === (22))){
var state_12535__$1 = state_12535;
var statearr_12551_12586 = state_12535__$1;
(statearr_12551_12586[(2)] = null);

(statearr_12551_12586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12536 === (6))){
var inst_12476 = (state_12535[(13)]);
var inst_12485 = f.call(null,inst_12476);
var inst_12486 = cljs.core.seq.call(null,inst_12485);
var inst_12487 = inst_12486;
var inst_12488 = null;
var inst_12489 = (0);
var inst_12490 = (0);
var state_12535__$1 = (function (){var statearr_12552 = state_12535;
(statearr_12552[(8)] = inst_12489);

(statearr_12552[(9)] = inst_12490);

(statearr_12552[(10)] = inst_12488);

(statearr_12552[(11)] = inst_12487);

return statearr_12552;
})();
var statearr_12553_12587 = state_12535__$1;
(statearr_12553_12587[(2)] = null);

(statearr_12553_12587[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12536 === (17))){
var inst_12501 = (state_12535[(7)]);
var inst_12505 = cljs.core.chunk_first.call(null,inst_12501);
var inst_12506 = cljs.core.chunk_rest.call(null,inst_12501);
var inst_12507 = cljs.core.count.call(null,inst_12505);
var inst_12487 = inst_12506;
var inst_12488 = inst_12505;
var inst_12489 = inst_12507;
var inst_12490 = (0);
var state_12535__$1 = (function (){var statearr_12554 = state_12535;
(statearr_12554[(8)] = inst_12489);

(statearr_12554[(9)] = inst_12490);

(statearr_12554[(10)] = inst_12488);

(statearr_12554[(11)] = inst_12487);

return statearr_12554;
})();
var statearr_12555_12588 = state_12535__$1;
(statearr_12555_12588[(2)] = null);

(statearr_12555_12588[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12536 === (3))){
var inst_12533 = (state_12535[(2)]);
var state_12535__$1 = state_12535;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12535__$1,inst_12533);
} else {
if((state_val_12536 === (12))){
var inst_12521 = (state_12535[(2)]);
var state_12535__$1 = state_12535;
var statearr_12556_12589 = state_12535__$1;
(statearr_12556_12589[(2)] = inst_12521);

(statearr_12556_12589[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12536 === (2))){
var state_12535__$1 = state_12535;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12535__$1,(4),in$);
} else {
if((state_val_12536 === (23))){
var inst_12529 = (state_12535[(2)]);
var state_12535__$1 = state_12535;
var statearr_12557_12590 = state_12535__$1;
(statearr_12557_12590[(2)] = inst_12529);

(statearr_12557_12590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12536 === (19))){
var inst_12516 = (state_12535[(2)]);
var state_12535__$1 = state_12535;
var statearr_12558_12591 = state_12535__$1;
(statearr_12558_12591[(2)] = inst_12516);

(statearr_12558_12591[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12536 === (11))){
var inst_12501 = (state_12535[(7)]);
var inst_12487 = (state_12535[(11)]);
var inst_12501__$1 = cljs.core.seq.call(null,inst_12487);
var state_12535__$1 = (function (){var statearr_12559 = state_12535;
(statearr_12559[(7)] = inst_12501__$1);

return statearr_12559;
})();
if(inst_12501__$1){
var statearr_12560_12592 = state_12535__$1;
(statearr_12560_12592[(1)] = (14));

} else {
var statearr_12561_12593 = state_12535__$1;
(statearr_12561_12593[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12536 === (9))){
var inst_12523 = (state_12535[(2)]);
var inst_12524 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_12535__$1 = (function (){var statearr_12562 = state_12535;
(statearr_12562[(15)] = inst_12523);

return statearr_12562;
})();
if(cljs.core.truth_(inst_12524)){
var statearr_12563_12594 = state_12535__$1;
(statearr_12563_12594[(1)] = (21));

} else {
var statearr_12564_12595 = state_12535__$1;
(statearr_12564_12595[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12536 === (5))){
var inst_12479 = cljs.core.async.close_BANG_.call(null,out);
var state_12535__$1 = state_12535;
var statearr_12565_12596 = state_12535__$1;
(statearr_12565_12596[(2)] = inst_12479);

(statearr_12565_12596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12536 === (14))){
var inst_12501 = (state_12535[(7)]);
var inst_12503 = cljs.core.chunked_seq_QMARK_.call(null,inst_12501);
var state_12535__$1 = state_12535;
if(inst_12503){
var statearr_12566_12597 = state_12535__$1;
(statearr_12566_12597[(1)] = (17));

} else {
var statearr_12567_12598 = state_12535__$1;
(statearr_12567_12598[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12536 === (16))){
var inst_12519 = (state_12535[(2)]);
var state_12535__$1 = state_12535;
var statearr_12568_12599 = state_12535__$1;
(statearr_12568_12599[(2)] = inst_12519);

(statearr_12568_12599[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12536 === (10))){
var inst_12490 = (state_12535[(9)]);
var inst_12488 = (state_12535[(10)]);
var inst_12495 = cljs.core._nth.call(null,inst_12488,inst_12490);
var state_12535__$1 = state_12535;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12535__$1,(13),out,inst_12495);
} else {
if((state_val_12536 === (18))){
var inst_12501 = (state_12535[(7)]);
var inst_12510 = cljs.core.first.call(null,inst_12501);
var state_12535__$1 = state_12535;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12535__$1,(20),out,inst_12510);
} else {
if((state_val_12536 === (8))){
var inst_12489 = (state_12535[(8)]);
var inst_12490 = (state_12535[(9)]);
var inst_12492 = (inst_12490 < inst_12489);
var inst_12493 = inst_12492;
var state_12535__$1 = state_12535;
if(cljs.core.truth_(inst_12493)){
var statearr_12569_12600 = state_12535__$1;
(statearr_12569_12600[(1)] = (10));

} else {
var statearr_12570_12601 = state_12535__$1;
(statearr_12570_12601[(1)] = (11));

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
});})(c__10044__auto__))
;
return ((function (switch__9932__auto__,c__10044__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__9933__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__9933__auto____0 = (function (){
var statearr_12574 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12574[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__9933__auto__);

(statearr_12574[(1)] = (1));

return statearr_12574;
});
var cljs$core$async$mapcat_STAR__$_state_machine__9933__auto____1 = (function (state_12535){
while(true){
var ret_value__9934__auto__ = (function (){try{while(true){
var result__9935__auto__ = switch__9932__auto__.call(null,state_12535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9935__auto__;
}
break;
}
}catch (e12575){if((e12575 instanceof Object)){
var ex__9936__auto__ = e12575;
var statearr_12576_12602 = state_12535;
(statearr_12576_12602[(5)] = ex__9936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12575;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12603 = state_12535;
state_12535 = G__12603;
continue;
} else {
return ret_value__9934__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__9933__auto__ = function(state_12535){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__9933__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__9933__auto____1.call(this,state_12535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__9933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__9933__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__9933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__9933__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__9933__auto__;
})()
;})(switch__9932__auto__,c__10044__auto__))
})();
var state__10046__auto__ = (function (){var statearr_12577 = f__10045__auto__.call(null);
(statearr_12577[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10044__auto__);

return statearr_12577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10046__auto__);
});})(c__10044__auto__))
);

return c__10044__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args12604 = [];
var len__7923__auto___12607 = arguments.length;
var i__7924__auto___12608 = (0);
while(true){
if((i__7924__auto___12608 < len__7923__auto___12607)){
args12604.push((arguments[i__7924__auto___12608]));

var G__12609 = (i__7924__auto___12608 + (1));
i__7924__auto___12608 = G__12609;
continue;
} else {
}
break;
}

var G__12606 = args12604.length;
switch (G__12606) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12604.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args12611 = [];
var len__7923__auto___12614 = arguments.length;
var i__7924__auto___12615 = (0);
while(true){
if((i__7924__auto___12615 < len__7923__auto___12614)){
args12611.push((arguments[i__7924__auto___12615]));

var G__12616 = (i__7924__auto___12615 + (1));
i__7924__auto___12615 = G__12616;
continue;
} else {
}
break;
}

var G__12613 = args12611.length;
switch (G__12613) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12611.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args12618 = [];
var len__7923__auto___12669 = arguments.length;
var i__7924__auto___12670 = (0);
while(true){
if((i__7924__auto___12670 < len__7923__auto___12669)){
args12618.push((arguments[i__7924__auto___12670]));

var G__12671 = (i__7924__auto___12670 + (1));
i__7924__auto___12670 = G__12671;
continue;
} else {
}
break;
}

var G__12620 = args12618.length;
switch (G__12620) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12618.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10044__auto___12673 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10044__auto___12673,out){
return (function (){
var f__10045__auto__ = (function (){var switch__9932__auto__ = ((function (c__10044__auto___12673,out){
return (function (state_12644){
var state_val_12645 = (state_12644[(1)]);
if((state_val_12645 === (7))){
var inst_12639 = (state_12644[(2)]);
var state_12644__$1 = state_12644;
var statearr_12646_12674 = state_12644__$1;
(statearr_12646_12674[(2)] = inst_12639);

(statearr_12646_12674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12645 === (1))){
var inst_12621 = null;
var state_12644__$1 = (function (){var statearr_12647 = state_12644;
(statearr_12647[(7)] = inst_12621);

return statearr_12647;
})();
var statearr_12648_12675 = state_12644__$1;
(statearr_12648_12675[(2)] = null);

(statearr_12648_12675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12645 === (4))){
var inst_12624 = (state_12644[(8)]);
var inst_12624__$1 = (state_12644[(2)]);
var inst_12625 = (inst_12624__$1 == null);
var inst_12626 = cljs.core.not.call(null,inst_12625);
var state_12644__$1 = (function (){var statearr_12649 = state_12644;
(statearr_12649[(8)] = inst_12624__$1);

return statearr_12649;
})();
if(inst_12626){
var statearr_12650_12676 = state_12644__$1;
(statearr_12650_12676[(1)] = (5));

} else {
var statearr_12651_12677 = state_12644__$1;
(statearr_12651_12677[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12645 === (6))){
var state_12644__$1 = state_12644;
var statearr_12652_12678 = state_12644__$1;
(statearr_12652_12678[(2)] = null);

(statearr_12652_12678[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12645 === (3))){
var inst_12641 = (state_12644[(2)]);
var inst_12642 = cljs.core.async.close_BANG_.call(null,out);
var state_12644__$1 = (function (){var statearr_12653 = state_12644;
(statearr_12653[(9)] = inst_12641);

return statearr_12653;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12644__$1,inst_12642);
} else {
if((state_val_12645 === (2))){
var state_12644__$1 = state_12644;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12644__$1,(4),ch);
} else {
if((state_val_12645 === (11))){
var inst_12624 = (state_12644[(8)]);
var inst_12633 = (state_12644[(2)]);
var inst_12621 = inst_12624;
var state_12644__$1 = (function (){var statearr_12654 = state_12644;
(statearr_12654[(7)] = inst_12621);

(statearr_12654[(10)] = inst_12633);

return statearr_12654;
})();
var statearr_12655_12679 = state_12644__$1;
(statearr_12655_12679[(2)] = null);

(statearr_12655_12679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12645 === (9))){
var inst_12624 = (state_12644[(8)]);
var state_12644__$1 = state_12644;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12644__$1,(11),out,inst_12624);
} else {
if((state_val_12645 === (5))){
var inst_12621 = (state_12644[(7)]);
var inst_12624 = (state_12644[(8)]);
var inst_12628 = cljs.core._EQ_.call(null,inst_12624,inst_12621);
var state_12644__$1 = state_12644;
if(inst_12628){
var statearr_12657_12680 = state_12644__$1;
(statearr_12657_12680[(1)] = (8));

} else {
var statearr_12658_12681 = state_12644__$1;
(statearr_12658_12681[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12645 === (10))){
var inst_12636 = (state_12644[(2)]);
var state_12644__$1 = state_12644;
var statearr_12659_12682 = state_12644__$1;
(statearr_12659_12682[(2)] = inst_12636);

(statearr_12659_12682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12645 === (8))){
var inst_12621 = (state_12644[(7)]);
var tmp12656 = inst_12621;
var inst_12621__$1 = tmp12656;
var state_12644__$1 = (function (){var statearr_12660 = state_12644;
(statearr_12660[(7)] = inst_12621__$1);

return statearr_12660;
})();
var statearr_12661_12683 = state_12644__$1;
(statearr_12661_12683[(2)] = null);

(statearr_12661_12683[(1)] = (2));


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
});})(c__10044__auto___12673,out))
;
return ((function (switch__9932__auto__,c__10044__auto___12673,out){
return (function() {
var cljs$core$async$state_machine__9933__auto__ = null;
var cljs$core$async$state_machine__9933__auto____0 = (function (){
var statearr_12665 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12665[(0)] = cljs$core$async$state_machine__9933__auto__);

(statearr_12665[(1)] = (1));

return statearr_12665;
});
var cljs$core$async$state_machine__9933__auto____1 = (function (state_12644){
while(true){
var ret_value__9934__auto__ = (function (){try{while(true){
var result__9935__auto__ = switch__9932__auto__.call(null,state_12644);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9935__auto__;
}
break;
}
}catch (e12666){if((e12666 instanceof Object)){
var ex__9936__auto__ = e12666;
var statearr_12667_12684 = state_12644;
(statearr_12667_12684[(5)] = ex__9936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12644);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12666;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12685 = state_12644;
state_12644 = G__12685;
continue;
} else {
return ret_value__9934__auto__;
}
break;
}
});
cljs$core$async$state_machine__9933__auto__ = function(state_12644){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9933__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9933__auto____1.call(this,state_12644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9933__auto____0;
cljs$core$async$state_machine__9933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9933__auto____1;
return cljs$core$async$state_machine__9933__auto__;
})()
;})(switch__9932__auto__,c__10044__auto___12673,out))
})();
var state__10046__auto__ = (function (){var statearr_12668 = f__10045__auto__.call(null);
(statearr_12668[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10044__auto___12673);

return statearr_12668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10046__auto__);
});})(c__10044__auto___12673,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args12686 = [];
var len__7923__auto___12756 = arguments.length;
var i__7924__auto___12757 = (0);
while(true){
if((i__7924__auto___12757 < len__7923__auto___12756)){
args12686.push((arguments[i__7924__auto___12757]));

var G__12758 = (i__7924__auto___12757 + (1));
i__7924__auto___12757 = G__12758;
continue;
} else {
}
break;
}

var G__12688 = args12686.length;
switch (G__12688) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12686.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10044__auto___12760 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10044__auto___12760,out){
return (function (){
var f__10045__auto__ = (function (){var switch__9932__auto__ = ((function (c__10044__auto___12760,out){
return (function (state_12726){
var state_val_12727 = (state_12726[(1)]);
if((state_val_12727 === (7))){
var inst_12722 = (state_12726[(2)]);
var state_12726__$1 = state_12726;
var statearr_12728_12761 = state_12726__$1;
(statearr_12728_12761[(2)] = inst_12722);

(statearr_12728_12761[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12727 === (1))){
var inst_12689 = (new Array(n));
var inst_12690 = inst_12689;
var inst_12691 = (0);
var state_12726__$1 = (function (){var statearr_12729 = state_12726;
(statearr_12729[(7)] = inst_12691);

(statearr_12729[(8)] = inst_12690);

return statearr_12729;
})();
var statearr_12730_12762 = state_12726__$1;
(statearr_12730_12762[(2)] = null);

(statearr_12730_12762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12727 === (4))){
var inst_12694 = (state_12726[(9)]);
var inst_12694__$1 = (state_12726[(2)]);
var inst_12695 = (inst_12694__$1 == null);
var inst_12696 = cljs.core.not.call(null,inst_12695);
var state_12726__$1 = (function (){var statearr_12731 = state_12726;
(statearr_12731[(9)] = inst_12694__$1);

return statearr_12731;
})();
if(inst_12696){
var statearr_12732_12763 = state_12726__$1;
(statearr_12732_12763[(1)] = (5));

} else {
var statearr_12733_12764 = state_12726__$1;
(statearr_12733_12764[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12727 === (15))){
var inst_12716 = (state_12726[(2)]);
var state_12726__$1 = state_12726;
var statearr_12734_12765 = state_12726__$1;
(statearr_12734_12765[(2)] = inst_12716);

(statearr_12734_12765[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12727 === (13))){
var state_12726__$1 = state_12726;
var statearr_12735_12766 = state_12726__$1;
(statearr_12735_12766[(2)] = null);

(statearr_12735_12766[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12727 === (6))){
var inst_12691 = (state_12726[(7)]);
var inst_12712 = (inst_12691 > (0));
var state_12726__$1 = state_12726;
if(cljs.core.truth_(inst_12712)){
var statearr_12736_12767 = state_12726__$1;
(statearr_12736_12767[(1)] = (12));

} else {
var statearr_12737_12768 = state_12726__$1;
(statearr_12737_12768[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12727 === (3))){
var inst_12724 = (state_12726[(2)]);
var state_12726__$1 = state_12726;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12726__$1,inst_12724);
} else {
if((state_val_12727 === (12))){
var inst_12690 = (state_12726[(8)]);
var inst_12714 = cljs.core.vec.call(null,inst_12690);
var state_12726__$1 = state_12726;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12726__$1,(15),out,inst_12714);
} else {
if((state_val_12727 === (2))){
var state_12726__$1 = state_12726;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12726__$1,(4),ch);
} else {
if((state_val_12727 === (11))){
var inst_12706 = (state_12726[(2)]);
var inst_12707 = (new Array(n));
var inst_12690 = inst_12707;
var inst_12691 = (0);
var state_12726__$1 = (function (){var statearr_12738 = state_12726;
(statearr_12738[(7)] = inst_12691);

(statearr_12738[(8)] = inst_12690);

(statearr_12738[(10)] = inst_12706);

return statearr_12738;
})();
var statearr_12739_12769 = state_12726__$1;
(statearr_12739_12769[(2)] = null);

(statearr_12739_12769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12727 === (9))){
var inst_12690 = (state_12726[(8)]);
var inst_12704 = cljs.core.vec.call(null,inst_12690);
var state_12726__$1 = state_12726;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12726__$1,(11),out,inst_12704);
} else {
if((state_val_12727 === (5))){
var inst_12694 = (state_12726[(9)]);
var inst_12699 = (state_12726[(11)]);
var inst_12691 = (state_12726[(7)]);
var inst_12690 = (state_12726[(8)]);
var inst_12698 = (inst_12690[inst_12691] = inst_12694);
var inst_12699__$1 = (inst_12691 + (1));
var inst_12700 = (inst_12699__$1 < n);
var state_12726__$1 = (function (){var statearr_12740 = state_12726;
(statearr_12740[(11)] = inst_12699__$1);

(statearr_12740[(12)] = inst_12698);

return statearr_12740;
})();
if(cljs.core.truth_(inst_12700)){
var statearr_12741_12770 = state_12726__$1;
(statearr_12741_12770[(1)] = (8));

} else {
var statearr_12742_12771 = state_12726__$1;
(statearr_12742_12771[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12727 === (14))){
var inst_12719 = (state_12726[(2)]);
var inst_12720 = cljs.core.async.close_BANG_.call(null,out);
var state_12726__$1 = (function (){var statearr_12744 = state_12726;
(statearr_12744[(13)] = inst_12719);

return statearr_12744;
})();
var statearr_12745_12772 = state_12726__$1;
(statearr_12745_12772[(2)] = inst_12720);

(statearr_12745_12772[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12727 === (10))){
var inst_12710 = (state_12726[(2)]);
var state_12726__$1 = state_12726;
var statearr_12746_12773 = state_12726__$1;
(statearr_12746_12773[(2)] = inst_12710);

(statearr_12746_12773[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12727 === (8))){
var inst_12699 = (state_12726[(11)]);
var inst_12690 = (state_12726[(8)]);
var tmp12743 = inst_12690;
var inst_12690__$1 = tmp12743;
var inst_12691 = inst_12699;
var state_12726__$1 = (function (){var statearr_12747 = state_12726;
(statearr_12747[(7)] = inst_12691);

(statearr_12747[(8)] = inst_12690__$1);

return statearr_12747;
})();
var statearr_12748_12774 = state_12726__$1;
(statearr_12748_12774[(2)] = null);

(statearr_12748_12774[(1)] = (2));


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
});})(c__10044__auto___12760,out))
;
return ((function (switch__9932__auto__,c__10044__auto___12760,out){
return (function() {
var cljs$core$async$state_machine__9933__auto__ = null;
var cljs$core$async$state_machine__9933__auto____0 = (function (){
var statearr_12752 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12752[(0)] = cljs$core$async$state_machine__9933__auto__);

(statearr_12752[(1)] = (1));

return statearr_12752;
});
var cljs$core$async$state_machine__9933__auto____1 = (function (state_12726){
while(true){
var ret_value__9934__auto__ = (function (){try{while(true){
var result__9935__auto__ = switch__9932__auto__.call(null,state_12726);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9935__auto__;
}
break;
}
}catch (e12753){if((e12753 instanceof Object)){
var ex__9936__auto__ = e12753;
var statearr_12754_12775 = state_12726;
(statearr_12754_12775[(5)] = ex__9936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12726);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12753;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12776 = state_12726;
state_12726 = G__12776;
continue;
} else {
return ret_value__9934__auto__;
}
break;
}
});
cljs$core$async$state_machine__9933__auto__ = function(state_12726){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9933__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9933__auto____1.call(this,state_12726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9933__auto____0;
cljs$core$async$state_machine__9933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9933__auto____1;
return cljs$core$async$state_machine__9933__auto__;
})()
;})(switch__9932__auto__,c__10044__auto___12760,out))
})();
var state__10046__auto__ = (function (){var statearr_12755 = f__10045__auto__.call(null);
(statearr_12755[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10044__auto___12760);

return statearr_12755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10046__auto__);
});})(c__10044__auto___12760,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args12777 = [];
var len__7923__auto___12851 = arguments.length;
var i__7924__auto___12852 = (0);
while(true){
if((i__7924__auto___12852 < len__7923__auto___12851)){
args12777.push((arguments[i__7924__auto___12852]));

var G__12853 = (i__7924__auto___12852 + (1));
i__7924__auto___12852 = G__12853;
continue;
} else {
}
break;
}

var G__12779 = args12777.length;
switch (G__12779) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12777.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10044__auto___12855 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10044__auto___12855,out){
return (function (){
var f__10045__auto__ = (function (){var switch__9932__auto__ = ((function (c__10044__auto___12855,out){
return (function (state_12821){
var state_val_12822 = (state_12821[(1)]);
if((state_val_12822 === (7))){
var inst_12817 = (state_12821[(2)]);
var state_12821__$1 = state_12821;
var statearr_12823_12856 = state_12821__$1;
(statearr_12823_12856[(2)] = inst_12817);

(statearr_12823_12856[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12822 === (1))){
var inst_12780 = [];
var inst_12781 = inst_12780;
var inst_12782 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_12821__$1 = (function (){var statearr_12824 = state_12821;
(statearr_12824[(7)] = inst_12781);

(statearr_12824[(8)] = inst_12782);

return statearr_12824;
})();
var statearr_12825_12857 = state_12821__$1;
(statearr_12825_12857[(2)] = null);

(statearr_12825_12857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12822 === (4))){
var inst_12785 = (state_12821[(9)]);
var inst_12785__$1 = (state_12821[(2)]);
var inst_12786 = (inst_12785__$1 == null);
var inst_12787 = cljs.core.not.call(null,inst_12786);
var state_12821__$1 = (function (){var statearr_12826 = state_12821;
(statearr_12826[(9)] = inst_12785__$1);

return statearr_12826;
})();
if(inst_12787){
var statearr_12827_12858 = state_12821__$1;
(statearr_12827_12858[(1)] = (5));

} else {
var statearr_12828_12859 = state_12821__$1;
(statearr_12828_12859[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12822 === (15))){
var inst_12811 = (state_12821[(2)]);
var state_12821__$1 = state_12821;
var statearr_12829_12860 = state_12821__$1;
(statearr_12829_12860[(2)] = inst_12811);

(statearr_12829_12860[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12822 === (13))){
var state_12821__$1 = state_12821;
var statearr_12830_12861 = state_12821__$1;
(statearr_12830_12861[(2)] = null);

(statearr_12830_12861[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12822 === (6))){
var inst_12781 = (state_12821[(7)]);
var inst_12806 = inst_12781.length;
var inst_12807 = (inst_12806 > (0));
var state_12821__$1 = state_12821;
if(cljs.core.truth_(inst_12807)){
var statearr_12831_12862 = state_12821__$1;
(statearr_12831_12862[(1)] = (12));

} else {
var statearr_12832_12863 = state_12821__$1;
(statearr_12832_12863[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12822 === (3))){
var inst_12819 = (state_12821[(2)]);
var state_12821__$1 = state_12821;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12821__$1,inst_12819);
} else {
if((state_val_12822 === (12))){
var inst_12781 = (state_12821[(7)]);
var inst_12809 = cljs.core.vec.call(null,inst_12781);
var state_12821__$1 = state_12821;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12821__$1,(15),out,inst_12809);
} else {
if((state_val_12822 === (2))){
var state_12821__$1 = state_12821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12821__$1,(4),ch);
} else {
if((state_val_12822 === (11))){
var inst_12789 = (state_12821[(10)]);
var inst_12785 = (state_12821[(9)]);
var inst_12799 = (state_12821[(2)]);
var inst_12800 = [];
var inst_12801 = inst_12800.push(inst_12785);
var inst_12781 = inst_12800;
var inst_12782 = inst_12789;
var state_12821__$1 = (function (){var statearr_12833 = state_12821;
(statearr_12833[(7)] = inst_12781);

(statearr_12833[(11)] = inst_12799);

(statearr_12833[(8)] = inst_12782);

(statearr_12833[(12)] = inst_12801);

return statearr_12833;
})();
var statearr_12834_12864 = state_12821__$1;
(statearr_12834_12864[(2)] = null);

(statearr_12834_12864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12822 === (9))){
var inst_12781 = (state_12821[(7)]);
var inst_12797 = cljs.core.vec.call(null,inst_12781);
var state_12821__$1 = state_12821;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12821__$1,(11),out,inst_12797);
} else {
if((state_val_12822 === (5))){
var inst_12789 = (state_12821[(10)]);
var inst_12782 = (state_12821[(8)]);
var inst_12785 = (state_12821[(9)]);
var inst_12789__$1 = f.call(null,inst_12785);
var inst_12790 = cljs.core._EQ_.call(null,inst_12789__$1,inst_12782);
var inst_12791 = cljs.core.keyword_identical_QMARK_.call(null,inst_12782,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_12792 = (inst_12790) || (inst_12791);
var state_12821__$1 = (function (){var statearr_12835 = state_12821;
(statearr_12835[(10)] = inst_12789__$1);

return statearr_12835;
})();
if(cljs.core.truth_(inst_12792)){
var statearr_12836_12865 = state_12821__$1;
(statearr_12836_12865[(1)] = (8));

} else {
var statearr_12837_12866 = state_12821__$1;
(statearr_12837_12866[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12822 === (14))){
var inst_12814 = (state_12821[(2)]);
var inst_12815 = cljs.core.async.close_BANG_.call(null,out);
var state_12821__$1 = (function (){var statearr_12839 = state_12821;
(statearr_12839[(13)] = inst_12814);

return statearr_12839;
})();
var statearr_12840_12867 = state_12821__$1;
(statearr_12840_12867[(2)] = inst_12815);

(statearr_12840_12867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12822 === (10))){
var inst_12804 = (state_12821[(2)]);
var state_12821__$1 = state_12821;
var statearr_12841_12868 = state_12821__$1;
(statearr_12841_12868[(2)] = inst_12804);

(statearr_12841_12868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12822 === (8))){
var inst_12781 = (state_12821[(7)]);
var inst_12789 = (state_12821[(10)]);
var inst_12785 = (state_12821[(9)]);
var inst_12794 = inst_12781.push(inst_12785);
var tmp12838 = inst_12781;
var inst_12781__$1 = tmp12838;
var inst_12782 = inst_12789;
var state_12821__$1 = (function (){var statearr_12842 = state_12821;
(statearr_12842[(7)] = inst_12781__$1);

(statearr_12842[(8)] = inst_12782);

(statearr_12842[(14)] = inst_12794);

return statearr_12842;
})();
var statearr_12843_12869 = state_12821__$1;
(statearr_12843_12869[(2)] = null);

(statearr_12843_12869[(1)] = (2));


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
});})(c__10044__auto___12855,out))
;
return ((function (switch__9932__auto__,c__10044__auto___12855,out){
return (function() {
var cljs$core$async$state_machine__9933__auto__ = null;
var cljs$core$async$state_machine__9933__auto____0 = (function (){
var statearr_12847 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12847[(0)] = cljs$core$async$state_machine__9933__auto__);

(statearr_12847[(1)] = (1));

return statearr_12847;
});
var cljs$core$async$state_machine__9933__auto____1 = (function (state_12821){
while(true){
var ret_value__9934__auto__ = (function (){try{while(true){
var result__9935__auto__ = switch__9932__auto__.call(null,state_12821);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9935__auto__;
}
break;
}
}catch (e12848){if((e12848 instanceof Object)){
var ex__9936__auto__ = e12848;
var statearr_12849_12870 = state_12821;
(statearr_12849_12870[(5)] = ex__9936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12821);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12848;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12871 = state_12821;
state_12821 = G__12871;
continue;
} else {
return ret_value__9934__auto__;
}
break;
}
});
cljs$core$async$state_machine__9933__auto__ = function(state_12821){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9933__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9933__auto____1.call(this,state_12821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9933__auto____0;
cljs$core$async$state_machine__9933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9933__auto____1;
return cljs$core$async$state_machine__9933__auto__;
})()
;})(switch__9932__auto__,c__10044__auto___12855,out))
})();
var state__10046__auto__ = (function (){var statearr_12850 = f__10045__auto__.call(null);
(statearr_12850[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10044__auto___12855);

return statearr_12850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10046__auto__);
});})(c__10044__auto___12855,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map