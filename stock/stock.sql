
select reportdate, TOTALOPERATEREVE, TOTALOPERATEEXP from lrb where securitycode='300136.SZ' and REPORTTYPE = '2'  order by date;

select reportdate, NETOPERATECASHFLOW, NETINVCASHFLOW, NETFINACASHFLOW from xjllb where securitycode='300136.SZ' and REPORTTYPE = '2'  order by date;


select reportdate, STBORROW + LTBORROW, SUMSHEQUITY, SUMSHEQUITY_YOY, STBORROW_YOY, LTBORROW_YOY from zcfzb where REPORTTYPE='2'  and securitycode='300136.SZ' order by date;



select * from capital_flow where code='000063.SZ';