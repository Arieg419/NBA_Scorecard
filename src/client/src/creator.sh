echo " { " >> output.json;
for file in ./img/*; do
  A="{"
  B=`${file} | cut -c 7-9`
  C=":"
  A+=$B
  A+=$C
  A+=$B
  A+="}"
  echo $A >> output.json
done
echo " } " >> output.json;
