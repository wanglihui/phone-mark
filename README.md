# phone mark 给手机号中间几位做标记
---


```
import {phoneMark} from 'phone-mark';

phoneMark('15512341234')
=> 155****1234

phoneMark('15512341234', {start: 4})
=> 1551****234

phoneMark('15512341234', {mark: '&'})
=> 155&&&&1234

phoneMark('15512341234', {mark: '*', length: 6, start:1})
=> 1******1234
```