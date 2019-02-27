Set-Variable -Name "IMAGE" -Value "dreckguy/mechanicmode-frontend"
Set-Variable -Name "KEY_PATH" -Value "~/keys/dashboard.pem"
Set-Variable -Name "SERVER" -Value "ec2-user@dev.dashboard.griiip.com"


docker build -t $(Get-Variable -Name "IMAGE" -ValueOnly) .
docker push $(Get-Variable -Name "IMAGE" -ValueOnly)
ssh -i $(Get-Variable -Name "KEY_PATH" -ValueOnly) $(Get-Variable -Name "SERVER" -ValueOnly) sh frontend.sh
