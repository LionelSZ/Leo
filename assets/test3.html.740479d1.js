import{_ as n,o as s,c as a,a as t}from"./app.bb0cec9f.js";const e={},p=t(`<h2 id="lodash\u6309\u9700\u52A0\u8F7D" tabindex="-1"><a class="header-anchor" href="#lodash\u6309\u9700\u52A0\u8F7D" aria-hidden="true">#</a> lodash\u6309\u9700\u52A0\u8F7D</h2><p>https://www.jianshu.com/p/f03ff4f3a8b3</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">reject</span><span class="token punctuation">(</span><span class="token parameter">reason</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// reason\u5931\u8D25\u6001\u65F6\u63A5\u6536\u7684\u62D2\u56E0</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u8C03\u7528reject \u56DE\u8C03\u5BF9\u5E94onRejected\u51FD\u6570</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>that<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token constant">PENDING</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// \u53EA\u80FD\u7531pending\u72B6\u6001 =&gt; rejected\u72B6\u6001 (\u907F\u514D\u8C03\u7528\u591A\u6B21resolve reject)</span>
                that<span class="token punctuation">.</span>status <span class="token operator">=</span> <span class="token constant">REJECTED</span><span class="token punctuation">;</span>
                that<span class="token punctuation">.</span>reason <span class="token operator">=</span> reason<span class="token punctuation">;</span>
                that<span class="token punctuation">.</span>onRejectedCallbacks<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">cb</span> <span class="token operator">=&gt;</span> <span class="token function">cb</span><span class="token punctuation">(</span>that<span class="token punctuation">.</span>reason<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),c=[p];function o(i,l){return s(),a("div",null,c)}var r=n(e,[["render",o],["__file","test3.html.vue"]]);export{r as default};
