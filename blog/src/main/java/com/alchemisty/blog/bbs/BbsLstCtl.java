package com.alchemisty.blog.bbs;

import java.util.Locale;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class BbsLstCtl {
	@RequestMapping(value = "/blog/bbs/BbsLst", method = RequestMethod.GET)
	public String add( Model model) {
		
		return "/blog/bbs/BbsLst";
	}
}
