---
title: MiroBlog
layout: base.njk
---

Hello Theo

{% for post in collections.posts %}
{{ post.data.title }}
{% endfor %}
