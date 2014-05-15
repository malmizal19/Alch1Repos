package com.alchemisty.blog.bbs;

import java.text.DateFormat;
import java.util.Date;
import java.util.Locale;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class BbsAddCtl {
	
	@RequestMapping(value = "/blog/bbs/BbsAddView", method = RequestMethod.GET)
	public String home(Model model) {
		
		return "/blog/bbs/BbsAdd";
	}
	
	@RequestMapping(value = "/blog/bbs/BbsAdd", method = RequestMethod.POST)
	public String home2(
			@RequestParam(value = "pContent", required = false, defaultValue = "") String pContent, 
            Locale locale, Model model) {
		System.out.println(pContent);
		
		model.addAttribute("pContent", pContent);
		return "/blog/bbs/BbsRst";
	}
}

