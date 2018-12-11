
select reportdate, TOTALOPERATEREVE, TOTALOPERATEEXP from lrb where securitycode='300136.SZ' and REPORTTYPE = '2'  order by date;

select reportdate, NETOPERATECASHFLOW, NETINVCASHFLOW, NETFINACASHFLOW from xjllb where securitycode='300136.SZ' and REPORTTYPE = '2'  order by date;


select reportdate, STBORROW + LTBORROW, SUMSHEQUITY, SUMSHEQUITY_YOY, STBORROW_YOY, LTBORROW_YOY from zcfzb where REPORTTYPE='2'  and securitycode='300136.SZ' order by date;



select * from capital_flow where code='000063.SZ';

select * from capital_flow where name='汽车行业';



select distinct name, code from capital_flow where code like 'BK%' order by date, code;

select t1.date, t1.name, t1.zlje/t2.s from capital_flow t1 join (
select date,sum(zlje) s from capital_flow where code like 'BK%' group by date) t2
on t1.date = t2.date and t1.code like 'BK%';

select distinct name from capital_flow;


select  distinct date from wh;
