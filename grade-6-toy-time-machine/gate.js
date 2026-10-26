(function(g){const V={};V.clean=(progress,duration)=>({frontier:Math.max(0,Math.min(Number.isFinite(progress?.frontier)?progress.frontier:0,Number.isFinite(duration)&&duration>0?duration:Infinity)),complete:progress?.complete===true});
V.sample=(p,a,time,now,active)=>{const dt=Math.max(0,Math.min(2,(now-a.wall)/1000)),delta=time-a.time;let rewind=false;if(active&&delta>=-.05){if(delta<=dt+.3&&a.time<=p.frontier+.3){p.frontier=Math.max(p.frontier,Math.min(time,p.frontier+dt+.03))}else if(time>p.frontier+.3)rewind=true}a.time=time;a.wall=now;return rewind};
V.seek=(p,time,duration)=>Math.max(0,Math.min(time,p.complete&&duration>0?duration:p.frontier));
V.ended=(p,duration,visible,hadPlayback)=>{if(visible&&hadPlayback&&Number.isFinite(duration)&&duration>0&&p.frontier>=duration-.35){p.frontier=duration;p.complete=true;return true}return false};
g.VideoGate=V;if(typeof module!=='undefined')module.exports=V})(typeof window==='undefined'?globalThis:window);
