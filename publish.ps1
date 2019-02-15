Set-Variable -Name "IMAGE" -Value "dreckguy/mechanicmode-frontend"
docker build -t $(Get-Variable -Name "IMAGE" -ValueOnly) .
docker push $(Get-Variable -Name "IMAGE" -ValueOnly)
