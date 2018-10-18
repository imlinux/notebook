SELECT
    periodExpTR,
    COGSTR,
    t.*
FROM
    fdmt_indi_stct_is_get t
WHERE
    periodExpTR >0
AND COGSTR > 0

ORDER BY endDate desc,
    periodExpTR + COGSTR;
    
select * from fdmt_indi_stct_bs_get

order by endDate desc;



select secshortName,npMargin,taTurnover,equMultiplierDupont,ROE,npMargin*taTurnover  from du_pont_analysis t order by npMargin * taTurnover desc;


select * from ts_get_today_all where per < 15 and pb < 1.5 order by mktcap desc;